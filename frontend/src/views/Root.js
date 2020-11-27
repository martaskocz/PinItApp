import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';
import store from 'store';
import Main from 'templates/Main';
import { routes } from 'routes/routes';
import Twitters from './Twitters';
import Articles from './Articles';
import Notes from './Notes';
import Details from './Details';
import Login from './Login';
import Register from './Register';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact component={Login} path={routes.login} />
          <Route exact component={Register} path={routes.register} />
          <Route exact path={routes.root} render={() => {
            if(Cookie.get('userID')){
              return <Redirect to="/notes" />
            }
            return <Redirect to="/login" />
          }} />
          <Route
            component={Details}
            path={routes.note}
            render={(props) => <Details {...props} />}
          />
          <Route exact component={Notes} path={routes.notes} />
          <Route component={Details} path={routes.twitter} />
          <Route exact component={Twitters} path={routes.twitters} />
          <Route component={Details} path={routes.article} />
          <Route exact component={Articles} path={routes.articles} />
        </Switch>
      </Main>
    </BrowserRouter>
  </Provider>
);

export default Root;
