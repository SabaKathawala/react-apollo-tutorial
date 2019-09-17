import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

// 1
// importing the required dependencies from the installed packages
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// 2
// httpLink will connect our ApolloClient instance with the GraphQL API,
// our GraphQL server will be running on http://localhost:4000
const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

// 3
// instantiating ApolloClient by passing in the httpLink and a new instance of an InMemoryCache
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

// 4
// render the root component of React app.
// The App is wrapped with the higher-order component ApolloProvider that gets passed the client as a prop.
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)
