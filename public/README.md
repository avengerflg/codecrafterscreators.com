# Static Assets

This directory contains static assets that are served directly by Next.js.

## Structure

```
public/
├── images/          # Images (logos, icons, photos)
├── icons/           # SVG icons and favicons
├── fonts/           # Custom font files (if not using web fonts)
└── documents/       # PDFs, documents for download
```

## Usage

In your React components, reference these assets using absolute paths:

```jsx
// Images
<img src="/images/logo.png" alt="Logo" />

// Icons
<img src="/icons/user.svg" alt="User icon" />

// Next.js Image component (recommended)
import Image from 'next/image'
<Image src="/images/hero.jpg" alt="Hero" width={800} height={400} />
```

## Optimization Tips

1. **Use Next.js Image component** for automatic optimization
2. **Optimize images** before adding them (use tools like ImageOptim, TinyPNG)
3. **Use appropriate formats**: WebP for photos, SVG for icons
4. **Include multiple sizes** for responsive images
5. **Add alt text** for accessibility

## Favicon

Replace the default `favicon.ico` with your own. You can also add:

- `apple-touch-icon.png` (180x180)
- `favicon-32x32.png`
- `favicon-16x16.png`
- `site.webmanifest` for PWA support
