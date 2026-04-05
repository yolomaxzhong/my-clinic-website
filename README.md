# Max Zhong Clinic Website

Minimal, elegant single-page website for:
- Chinese Medicine
- Acupuncture
- Pain Management

Built as a static site for easy GitHub Pages hosting.

## Files
- `index.html` - page content and structure
- `styles.css` - design system, responsive layout, animations
- `script.js` - mobile nav + booking form behavior

## Quick Personalization
1. Update phone, email, and location text in `index.html`.
2. Update booking destination in `script.js`:
   - `bookingEmail`: where booking requests should be sent.
   - `externalBookingUrl`: optional scheduling link (Calendly, JaneApp, etc.). Leave empty to hide.
3. Replace mock reviews in the `#reviews` section once you have real testimonials.

## Run Locally
Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy To GitHub Pages
1. Create a GitHub repository.
2. Push these files to the `main` branch.
3. In GitHub: `Settings` -> `Pages`.
4. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Save, then wait 1-3 minutes.
6. Your site will be live at:
   - `https://<your-github-username>.github.io/<repo-name>/`

## Notes
- This booking flow is static-host friendly: it opens the visitor's email app with a pre-filled request.
- If you want fully server-side booking later, connect a form backend service or external scheduling platform.
