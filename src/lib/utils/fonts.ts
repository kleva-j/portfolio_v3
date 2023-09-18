import { Inter } from 'next/font/google';

import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const sfMono = localFont({
  src: [
    {
      path: '../../../public/fonts/SFMono-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SFMono-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/SFMono-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-mono',
  display: 'swap',
});
