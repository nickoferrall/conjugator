import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Account from './containers/Account';
import Homepage from './containers/Homepage/index';
import Login from './containers/Account/Login';
import Nav from './components/Nav/index';
import Settings from './containers/Settings/index';
import SignUp from './containers/Account/SignUp';

function App() {
  const token = window.localStorage.getItem('jwt');

  const client = token
    ? new ApolloClient({
        uri: process.env.REACT_APP_HEROKU_URL,
        request: async operation => {
          operation.setContext({
            headers: {
              authorization: token
            }
          });
        }
      })
    : new ApolloClient({
        uri: process.env.REACT_APP_HEROKU_URL
      });

  return (
    <>
      <ApolloProvider client={client}>
        <CssBaseline />
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route
            exact
            path="/settings"
            render={props => <Settings {...props} />}
          />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route
            exact
            path="/sign-up"
            render={props => <SignUp {...props} />}
          />
          <Route
            exact
            path="/account"
            render={props => <Account {...props} />}
          />
          <Route render={() => <h1>URL not found!</h1>} />
        </Switch>
      </ApolloProvider>
    </>
  );
}

export default App;
