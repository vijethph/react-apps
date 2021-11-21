import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

// useContext allows us to tap into a Context and listen to it
// pass the context appointer into it, and it returns a context value

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

// return (
//  <AuthContext.Consumer>
//       {(ctx) => {
//         return ( .... );
//       }}
// </AuthContext.Consumer>
//  );

// AuthContext.Consumer takes a child - which is a function where context object is available as an argument, and in the function you should return normal component JSX code
// if there is a default value in context object, it will only be used if there's a consumer without a provider
