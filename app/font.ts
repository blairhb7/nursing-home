// app/fonts.ts
import { Gilda_Display, Merriweather_Sans } from 'next/font/google';

export const gildaDisplay = Gilda_Display({
  subsets: ['latin'],
  weight: '400', // Adjust if needed
  display: 'swap',
});

export const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights you need
  display: 'swap',
});
