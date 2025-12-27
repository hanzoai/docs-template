# @luxfi/docs-template

A documentation template for Lux Network projects, built with [Fumadocs](https://fumadocs.vercel.app/) and Next.js.

## Features

- **Dark Mode** - Automatic theme switching with system preference
- **Fast** - Built with Next.js and optimized for performance
- **Searchable** - Built-in search functionality
- **Responsive** - Works on all device sizes
- **Lux Branding** - Uses @luxfi/logo for favicon, OG image, and header
- **Social Links** - Pre-configured with Lux ecosystem links (Discord, X, Warpcast)

## Quick Start

### 1. Fork/Clone

```bash
cp -r ~/work/lux/docs-template ~/work/lux/my-project-docs
cd ~/work/lux/my-project-docs
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure

Edit `app/layout.tsx`:

```typescript
const SITE_CONFIG = {
  name: 'My Project',
  description: 'My project description',
  url: 'https://docs.myproject.com',
  keywords: ['my', 'keywords'],
}
```

Edit `app/docs/layout.tsx`:

```typescript
const DOCS_CONFIG = {
  name: 'My Project',
  github: 'https://github.com/luxfi/my-project',
  socials: {
    website: 'https://myproject.com',
    discord: 'https://discord.gg/my-server',
    twitter: 'https://x.com/my-handle',
    warpcast: 'https://warpcast.com/my-handle',
  },
  footerLinks: [
    { text: 'View on GitHub', url: '...', icon: 'github' },
  ],
}
```

### 4. Add Content

Create MDX files in `content/docs/`:

```
content/docs/
├── index.mdx          # Home page
├── getting-started.mdx
└── api/
    └── index.mdx
```

Update `content/docs/meta.json` with your page structure.

### 5. Run

```bash
pnpm dev
```

## Branding

The template uses `@luxfi/logo` for consistent Lux branding:

- **Favicon**: `public/favicon.svg` - Uses official Lux triangle logo
- **OG Image**: Generate with `pnpm generate:og`
- **Header**: Logo component from `@luxfi/logo`

### Generate OG Image

```bash
# Install sharp for PNG generation (optional)
pnpm add -D sharp

# Generate OG image
pnpm generate:og
```

This creates `public/og.svg` (and `public/og.png` if sharp is installed).

Edit `scripts/generate-og.js` to customize the title and description.

## File Structure

```
docs-template/
├── app/
│   ├── layout.tsx      # SITE_CONFIG - metadata, SEO
│   ├── docs/
│   │   └── layout.tsx  # DOCS_CONFIG - sidebar, socials
│   └── globals.css     # Custom styles
├── content/
│   └── docs/           # Your MDX content
│       └── meta.json   # Page order/structure
├── components/
│   └── logo.tsx        # Lux logo component
├── lib/
│   └── source.ts       # Fumadocs source config
└── public/
    ├── favicon.svg     # Replace with your favicon
    └── og.png          # Replace with your OG image
```

## Deployment

### Vercel

1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Static Export

```bash
pnpm build
# Output in `.next/` or use `next export` for `out/`
```

## License

MIT
