import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AppCommonModule from './quotes-social-front/app-commons';
import QuotesModule from './quotes-social-front/quotes';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/quotes" component={QuotesModule.QuotesListPage} />
      <Route path="/*" component={AppCommonModule.NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
