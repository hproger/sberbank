import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Provider } from 'react-redux';
import { AppBar, Grid } from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from '@material-ui/core/styles';
import Main from "./components/Main";
import EditorUser from "./components/EditorUser";
import Settings from "./components/Settings";
import store from "./redux/store";

const useStyles = makeStyles(theme => ({
  menu: {
    display: 'flex'
  },
  menuItem: {
    textDecoration: 'none',
    color: 'inherit'
  },
  content: {
    flexWrap: 'nowrap'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppBar position="relative">
            <MenuList className={classes.menu}>
              <MenuItem><Link to="/" className={classes.menuItem}>Список сотрудников</Link></MenuItem>
              <MenuItem><Link to="/user/add" className={classes.menuItem}>Добавить запись</Link></MenuItem>
              <MenuItem><Link to="/settings" className={classes.menuItem}>Настройки</Link></MenuItem>
            </MenuList>
          </AppBar>
          <Grid container spacing={2} className={classes.content}>
            <Route exact path="/" component={Main} />
            <Route path="/user/add" component={EditorUser} />
            <Route path="/settings" component={Settings} />
          </Grid>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
