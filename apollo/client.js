import ApolloClient from 'apollo-boost';
import { YELP_API_KEY } from 'react-native-dotenv';

const client = new ApolloClient({
    uri: 'https://api.yelp.com/v3/graphql',
    fetchOptions: {
        credentials: 'include'
    },
    request: async (operation) => {
        operation.setContext({
            headers: {
                authorization: `Bearer ${YELP_API_KEY}`
            }
        });
    },
    onError: ({graphQLErrors, networkError}) => {
        console.log('on error');
        console.log(graphQLErrors);
        console.log(networkError);
    }
});

export default client;