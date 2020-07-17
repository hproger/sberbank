import React from 'react';
import { AppBar, MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../hooks';
import { pages } from '../constants';

const NavBar = () => {
  const style = useStyles();

  return (
    <AppBar position="relative">
      <MenuList className={style.menu}>
        {pages.map((it, index) => (
          <MenuItem key={index}>
            <Link to={it.route} className={style.menuItem}>
              {it.name}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </AppBar>
  );
};

export default NavBar;
