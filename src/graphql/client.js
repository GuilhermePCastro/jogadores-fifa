import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws'

export const client = new ApolloClient({
    link: new WebSocketLink({
        uri: 'wss://accepted-giraffe-64.hasura.app/v1/graphql',
        options: {
            reconnect: true,
            connectionParams:{
                headers: {'x-hasura-admin-secret':'03Mi0uxFmcZzONaVYuOyrEjRi91ujmVTQgKkNGTybpkhDWA0lIYae5pNbiGKNMox'}
            }
        }
    }),
    cache: new InMemoryCache()
})

