# Logo Instructions

## Adding Your Logo

1. Your logo file is located at `logo.jpeg` in the `/public` directory
2. The logo format is JPEG
3. The logo is already in place and configured

## Current Implementation

- The navbar currently uses a text-based logo (VW initials in a gradient box)
- To use your actual logo image, update `components/Navbar.tsx`:
  - Replace the gradient box div with: `<Image src="/logo.jpeg" alt="The Vega Wealth" width={48} height={48} />`
  - Add `import Image from 'next/image'` at the top

## SEO Logo

- The logo is referenced in JSON-LD schema for SEO purposes
- Update the logo URL in `app/layout.tsx` if your logo is hosted elsewhere
- Currently set to: `https://vegawalth.com/logo.jpeg`

