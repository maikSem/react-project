import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to={'/login'}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <div className={classes.login}>Login</div>}
      </NavLink>
    </header>
  )
}

export default Header;
