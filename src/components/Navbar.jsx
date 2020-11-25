import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>Profile</li>
        <li className={`${classes.item} ${classes.active}`}>Messages</li>
        <li>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}

export default Navbar;
