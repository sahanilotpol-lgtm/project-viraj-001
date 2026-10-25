# Viraj Immigration Pvt Ltd — Website Codebase

## Logo Image Location & Links
- **Local Project Path (linked in `index.html`)**: `assets/viraj-logo.jpg` (also copied at root `viraj-logo.jpg`)
- **Google Drive Cloud Link**: https://drive.google.com/file/d/1N0eZoFQOTQN0hAUfF5lKM1zzZbNAoabt/view?usp=drivesdk
- **Google Drive Direct Thumbnail URL**: `https://drive.google.com/thumbnail?id=1N0eZoFQOTQN0hAUfF5lKM1zzZbNAoabt&sz=w400`

## How It Is Linked in `index.html` & `supersmartgeekvisas.html`
All 3 brand logo `<img>` elements (Top Sticky Header, About Us Founder Emblem, and Main Footer) are linked directly to `assets/viraj-logo.jpg`:
```html
<img src="assets/viraj-logo.jpg"
     data-drive-src="https://drive.google.com/thumbnail?id=1N0eZoFQOTQN0hAUfF5lKM1zzZbNAoabt&sz=w400"
     onerror="this.onerror=null;this.src=window.VIRAJ_LOGO_DATA;"
     alt="Viraj Immigration Pvt Ltd Logo" ... />
```
- When opened locally from this codebase folder, the browser loads `assets/viraj-logo.jpg`.
- When previewed as a standalone single-file HTML in Canvas (`supersmartgeekvisas.html`), the `onerror` fallback automatically renders the embedded high-resolution logo so it never appears broken.
