import { Header } from '@/components/organisms/Header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Box } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poké Manage',
  description: 'Application to manage Pokémon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Box p={8}>{children}</Box>
        </Providers>
      </body>
    </html>
  );
}
