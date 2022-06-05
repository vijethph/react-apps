import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Simple Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

// A <NavLink> is a special kind of <Link> that knows whether or not it is "active". This is useful when building a navigation menu such as a breadcrumb or a set of tabs where we would like to show which of them is currently selected. It also provides useful context for assistive technology like screen readers. By default, an active class is added to a <NavLink> component when it is active. We can also pass a function as children to customize the content of the <NavLink> component based on their active state, specially useful to change styles on internal elements.
