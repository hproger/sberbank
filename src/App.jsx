import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Grid } from '@material-ui/core';
import { NavBar } from './components';
import store from './redux/store';
import { useStyles } from './hooks';
import { pages } from './constants';

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Grid container spacing={2} className={classes.content}>
          <Switch>
            {pages.map((page) => (
              <Route key={page.id} exact path={page.route} component={page.component} />
            ))}
            <Redirect to="/" />
          </Switch>
        </Grid>
      </Router>
    </Provider>
  );
};

export default App;
