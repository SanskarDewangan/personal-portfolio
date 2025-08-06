import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

/**
 * Apollo Client configuration for GraphQL requests
 */
const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:3000/api/graphql' }),
  cache: new InMemoryCache(),
});

export default client;