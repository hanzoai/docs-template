# @luxfi/docs-template - AI Assistant Guide

## Overview

This is a documentation template for Lux Network projects built with Fumadocs UI and Next.js.

## Project Structure

```
docs-template/
├── app/
│   ├── layout.tsx         # SITE_CONFIG - metadata, SEO
│   └── docs/layout.tsx    # DOCS_CONFIG - sidebar, socials, footer
├── content/docs/          # MDX documentation content
│   └── meta.json          # Sidebar structure
├── components/logo.tsx    # Lux logo component (@luxfi/logo)
├── lib/source.ts          # Fumadocs content source
└── public/
    ├── favicon.svg        # Lux logo favicon
    └── og.png             # Open Graph image
```

## Configuration

### SITE_CONFIG (app/layout.tsx)
```typescript
const SITE_CONFIG = {
  name: 'Project Name',
  description: 'Project description',
  url: 'https://docs.project.com',
  keywords: ['keyword1', 'keyword2'],
}
```

### DOCS_CONFIG (app/docs/layout.tsx)
```typescript
const DOCS_CONFIG = {
  name: 'Project Name',
  github: 'https://github.com/org/repo',
  socials: {
    website: 'https://lux.network',
    discord: 'https://discord.gg/luxfi',
    twitter: 'https://x.com/luxdefi',
    warpcast: 'https://warpcast.com/luxfi',
  },
  footerLinks: [
    { text: 'View on GitHub', url: '...', icon: 'github' },
  ],
}
```

## Commands

```bash
pnpm dev          # Development server (port 3003)
pnpm build        # Production build
pnpm generate:og  # Generate OG image
```

## Dependencies

- `@luxfi/logo` - Official Lux logo
- `fumadocs-ui` / `fumadocs-core` - Documentation framework
- `react-markdown` / `remark-gfm` - Markdown rendering
- `gray-matter` - Frontmatter parsing

## Forking for New Projects

1. Clone: `gh repo clone luxfi/docs-template my-docs`
2. Edit `SITE_CONFIG` and `DOCS_CONFIG`
3. Replace content in `content/docs/`
4. Update `public/og.png`
5. Deploy to Vercel

## Pulling Upstream Changes

See UPSTREAM.md in forked projects for sync instructions.
