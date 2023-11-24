import { Baloo_2 } from 'next/font/google';

import '@/styles/globals.css';

import { NavBar } from '@/components';

export const metadata = {
  title: 'The Cleaning Company',
  description: 'The Cleaning Company',
};

const Baloo2 = Baloo_2({
  weight: ['400', '500', '600', '700', '800'],
  // display: 'swap',
  subsets: ['latin-ext'],
  style: ['normal'],
  variable: '--baloo-2',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${Baloo2.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
