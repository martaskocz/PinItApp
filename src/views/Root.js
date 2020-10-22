import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from 'templates/Main';
import { routes } from 'routes/routes';
import Twitter from './Twitter';
import Article from './Article';
import Note from './Note';
import Details from './Details';

const Root = () => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path={routes.root} render={() => <Redirect to="/notes" />} />
        <Route path={routes.note} component={Details} />
        <Route path={routes.notes} component={Note} />
        <Route path={routes.twitter} component={Details} />
        <Route path={routes.twitters} component={Twitter} />
        <Route path={routes.article} component={Details} />
        <Route path={routes.articles} component={Article} />
      </Switch>
    </Main>
  </BrowserRouter>
);

export default Root;
