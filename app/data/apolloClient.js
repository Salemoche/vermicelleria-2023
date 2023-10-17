import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: "https://backend.vermicelleria.ch/craft/web/api",
    cache: new InMemoryCache()
});