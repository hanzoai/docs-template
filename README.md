# @luxfi/docs-template

A documentation template for Lux Network projects, built with [Fumadocs](https://fumadocs.vercel.app/) and Next.js.

## Features

- **Dark Mode** - Automatic theme switching with system preference
- **Fast** - Built with Next.js and optimized for performance
- **Searchable** - Built-in search functionality
- **Responsive** - Works on all device sizes
- **Social Links** - Pre-configured sidebar with Discord, X, Warpcast icons
- **Lux Branding** - Includes @luxfi/logo package

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
