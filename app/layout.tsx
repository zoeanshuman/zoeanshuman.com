import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zoe-anshuman.zoeanshuman.chatgpt.site'),
  title: 'Zoe Anshuman — student maker',
  description:
    'Apps, websites, and films by Zoe Anshuman — small things made to solve real problems.',
  openGraph: {
    title: 'Zoe Anshuman',
    description: 'Small things that solve real problems.',
    images: [
      {
        url: '/og.png',
        width: 1736,
        height: 977,
        alt: 'Zoe Anshuman — Small things that solve real problems.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoe Anshuman',
    description: 'Small things that solve real problems.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
