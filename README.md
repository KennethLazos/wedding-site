# Ma. Elena & John Gerick: Wedding Website

This is a static single-page site. It's one `index.html` plus an `images/` folder, and it has no build step.

```
wedding-site/
├── index.html          ← the whole site (HTML + CSS + JS)
├── images/             ← gallery-1.jpg … gallery-6.jpg
├── apps-script/Code.gs ← RSVP backend (Google Sheet + Gmail)
└── README.md
```

## 1. Fill in the content

Open `index.html` and search for `EDIT:`. Each tag marks something to replace:

- **Our Story:** years and short text for each chapter
- **Reception address:** the full street address of Palacio de Manila
- **Program:** times, once your coordinator confirms them
- **Entourage:** the names
- **FAQs:** confirm the answers (parking, kids, unplugged ceremony)
- **RSVP deadline:** currently 17 May 2027, in the RSVP heading and the FAQ
- **Hashtag:** in the footer

## 2. Add photos

Save six photos to `images/` as `gallery-1.jpg` through `gallery-6.jpg`.

- Photo 1 is shown large, so use the best landscape shot.
- Photo 4 is a tall tile, so use a portrait shot.
- Aim for about 1600px on the long side and under 400 KB each.

Missing photos show a striped placeholder until you add them.

## 3. Connect RSVP to Gmail (about 5 minutes)

1. Sign in to the Gmail account that should receive RSVPs and create a new **Google Sheet** named "Wedding RSVPs".
2. In the sheet, open **Extensions → Apps Script**.
3. Delete the sample code and paste in everything from `apps-script/Code.gs`.
4. Set `NOTIFY_EMAIL` at the top to your Gmail address. To notify both of you, separate the two addresses with a comma.
5. Choose `testSetup` in the function dropdown and click **Run**. Approve the permissions when prompted:
   - Google will show "unverified app" because this is your own script.
   - Click **Advanced → Go to project**.
   - You should get a test email, and an "RSVPs" tab appears in the sheet. You can delete the test row afterwards.
6. Click **Deploy → New deployment**. Set the type to **Web app**, then:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy** and copy the **Web app URL**, which ends in `/exec`.
8. In `index.html`, paste the URL here:
   ```js
   const RSVP_ENDPOINT = "https://script.google.com/macros/s/XXXX/exec";
   ```

If you edit `Code.gs` later, go to **Deploy → Manage deployments → ✏️ → Version: New version → Deploy**. The URL stays the same.

## 4. Publish it (free)

**Netlify (easiest)**

1. Go to app.netlify.com/drop.
2. Drag the `wedding-site` folder onto the page to get a live link right away.
3. Rename it under **Site settings**, for example `elena-and-gerick.netlify.app`.

**GitHub Pages**

1. Push the folder to a repository.
2. Go to **Settings → Pages** and set it to deploy from the main branch.

**Custom domain (optional)**

Buy one, for example `elenaandgerick.com`, and connect it in Netlify under **Domain management**.

## Notes

- **Envelope intro:** it shows on every visit. Links that include a section, like `yoursite.com/#rsvp`, skip it, which is handy for reminder messages.
- **Maps:** these use Google Maps embeds, so no API key is needed. Each venue has "Get directions" and "Open in Waze" buttons.
- **Florals:** these are original SVG artwork drawn by code in `index.html`. You can swap in your invitation designer's floral files later if you'd like an exact match with the printed suite.
