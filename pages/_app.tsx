import type { AppContext, AppInitialProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@app/theme';
import { Header } from '@app/components';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@app/utils';

const App = ({
  Component,
  pageProps,
}: AppContext & AppInitialProps): JSX.Element => {
  const apolloClient = useApollo(pageProps);
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;
