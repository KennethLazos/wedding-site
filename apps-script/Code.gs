/**
 * RSVP backend for Ma. Elena & John Gerick's wedding website.
 * Each RSVP: (1) adds a row to the "RSVPs" sheet, (2) emails NOTIFY_EMAIL.
 * Setup steps are in README.md.
 */

const NOTIFY_EMAIL = 'your.email@gmail.com';   // EDIT: where RSVP notifications go (comma-separate for several)
const SHEET_NAME   = 'RSVPs';
const HEADERS = ['Timestamp', 'Name', 'Email', 'Mobile', 'Attending', 'Guests', 'Dietary needs', 'Message'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const p = (e && e.parameter) || {};
    if (p.website) return json({ ok: true });            // spam honeypot
    if (!p.name || !p.email || !p.attending) return json({ ok: false, error: 'Missing required fields' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
    const row = [new Date(), p.name, p.email, p.phone || '', p.attending, p.guests || '1', p.dietary || '', p.message || ''];
    sh.appendRow(row);

    const yes = p.attending === 'Yes';
    const subject = (yes ? '✅ ' : '❌ ') + 'RSVP: ' + p.name + (yes ? ' (' + (p.guests || 1) + ' guest/s)' : ' — declined');
    const rows = HEADERS.slice(1).map((h, i) =>
      '<tr><td style="padding:6px 14px 6px 0;color:#7A6369">' + h + '</td><td style="padding:6px 0"><b>' + esc(row[i + 1]) + '</b></td></tr>'
    ).join('');
    const html =
      '<div style="font-family:Georgia,serif;color:#3B2B31">' +
      '<h2 style="color:#C8336E;font-weight:normal">New RSVP for Elena &amp; Gerick</h2>' +
      '<table style="border-collapse:collapse">' + rows + '</table>' +
      '<p style="margin-top:18px"><a href="' + ss.getUrl() + '">Open the guest list</a></p></div>';

    const opts = { to: NOTIFY_EMAIL, subject: subject, htmlBody: html, name: 'Wedding RSVP' };
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) opts.replyTo = p.email;
    MailApp.sendEmail(opts);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the Web App URL in a browser to check it's live.
function doGet() {
  return json({ ok: true, message: 'RSVP endpoint is running.' });
}

// Run this once from the editor to grant permissions and send a test email.
function testSetup() {
  doPost({ parameter: { name: 'Test Guest', email: NOTIFY_EMAIL.split(',')[0], attending: 'Yes', guests: '2', message: 'Setup test' } });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
