// react import
import React from 'react';
import ReactDOM from 'react-dom';

// apollo
/* import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'; */

// app import
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

// configure apollo link
/* const httpLink = new HttpLink({ uri: 'http://localhost:4000/quotes' });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
}); */

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
