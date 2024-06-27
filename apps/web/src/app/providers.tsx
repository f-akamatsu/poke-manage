'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { useMemo } from 'react';
import { UrqlProvider, cacheExchange, createClient, fetchExchange, ssrExchange } from '@urql/next';

export function Providers({ children }: { children: React.ReactNode }) {
  // urql
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    });
    const client = createClient({
      url: 'http://localhost:3001/graphql', // TODO env
      exchanges: [cacheExchange, ssr, fetchExchange],
    });
    return [client, ssr];
  }, []);

  return (
    <ChakraProvider>
      <UrqlProvider client={client} ssr={ssr}>
        {children}
      </UrqlProvider>
    </ChakraProvider>
  );
}
