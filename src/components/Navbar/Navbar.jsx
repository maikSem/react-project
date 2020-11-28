import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}><NavLink activeClassName={classes.activeLink} to='/profile'>Profile</NavLink></li>
        <li className={`${classes.item}`}><NavLink activeClassName={classes.activeLink} to='/dialogs'>Messages</NavLink></li>
        <li className={`${classes.item}`}><NavLink activeClassName={classes.activeLink} to='/news'>News</NavLink></li>
        <li className={`${classes.item}`}><NavLink activeClassName={classes.activeLink} to='/music'>Music</NavLink></li>
        <li className={`${classes.item}`}><NavLink activeClassName={classes.activeLink} to='/settings'>Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;
