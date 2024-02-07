import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';

export function App({ Component, pageProps }: AppProps) {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL,
        cache: new InMemoryCache(),
        credentials: 'include',
      }),
    [],
  );

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
