import { Header } from '@/components/organisms/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poké Manage',
  description: 'Application to manage Pokémon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <ChakraProvider>
          <Header />
          {children}
          <h1>Layout Footer</h1>
        </ChakraProvider>
      </body>
    </html>
  );
}
