import { Header } from '@/components/organisms/Header/Header';
import { Box } from '@chakra-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Poké Manage',
  description: 'Application to manage Pokémon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' style={{ height: '100%' }}>
      <body className={inter.className} style={{ height: '100%' }}>
        <Providers>
          <Box h='100%' bgColor='gray.50'>
            <Header />
            <Box p={8}>{children}</Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
