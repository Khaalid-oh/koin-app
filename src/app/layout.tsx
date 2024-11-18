import type { Metadata } from 'next';
import { FirebaseProvider } from '@/components/firebase-provider';
import './globals.css';
import Navbar from '@/components/organisms/Navbar';
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

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
        className={`${inter.className} antialiased`}
      >
        <FirebaseProvider>
          <Navbar /> {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
