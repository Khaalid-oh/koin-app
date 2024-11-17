import type { Metadata } from 'next';
import { FirebaseProvider } from '@/components/firebase-provider';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/organisms/Navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Koin',
  description: 'Find coaches and trainers close to you',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FirebaseProvider>
          <Navbar /> {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
