import '../styles/index.css';
import '../styles/logo.css';

import type { Metadata } from 'next';

import { inter, sfMono } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Michael Obasi',
  description: 'My Portfolio version 3',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sfMono.variable} font-sans`}>{children}</body>
    </html>
  );
}
