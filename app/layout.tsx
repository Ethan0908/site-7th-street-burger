import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = { title: '7th Street Burger', description: 'fast food • manhattan • 4.6 rating • 2240 Google reviews • 485 7th Ave, New York, NY 10018, USA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
