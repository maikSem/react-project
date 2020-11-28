import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}><a href='/profile'>Profile</a></li>
        <li className={`${classes.item} ${classes.active}`}><a href='/dialogs'>Messages</a></li>
        <li><a href='/news'>News</a></li>
        <li><a href='/music'>Music</a></li>
        <li><a href='/settings'>Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
