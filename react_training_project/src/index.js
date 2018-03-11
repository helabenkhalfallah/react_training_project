// react import
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

// apollo
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// app import
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routes from './routes';

// configure apollo link
const httpLink = new HttpLink({ uri: 'http://localhost:4000/quotes' });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
  , document.getElementById('root'),
);
registerServiceWorker();
