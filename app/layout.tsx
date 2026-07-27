import { RootProvider } from '@hanzo/docs/ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { appName, docsImageRoute } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin'],
});

// Brand-consistent metadata + social card for every page (og:image from the
// shared /og/docs route). Override `title.default`/`description` per product
// via lib/shared.ts — the look stays unified.
export const metadata: Metadata = {
  title: { default: appName, template: `%s — ${appName}` },
  description: `${appName} documentation`,
  openGraph: {
    type: 'website',
    siteName: appName,
    images: [{ url: docsImageRoute, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [docsImageRoute],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
