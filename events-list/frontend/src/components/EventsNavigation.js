import { NavLink, useRouteLoaderData } from "react-router-dom";

import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Events
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to="/events/new"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                New Event
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;

/*
A <NavLink> is a special kind of <Link> that knows whether or not it is "active". This is useful when building a navigation menu such as a breadcrumb or a set of tabs where we'd like to show which of them is currently selected. It also provides useful context for assistive technology like screen readers.

By default, an active class is added to a <NavLink> component when it is active. We can pass a function to either style or className that will allow us to customize the inline styling or the class string based on the component's active state. We can also pass a function as children to customize the content of the <NavLink> component based on their active state, specially useful to change styles on internal elements.

If the end prop is used, it will ensure this component isn't matched as "active" when its descendant paths are matched. Example: we don't want "/" to be active when "/products" is active, as both are matching paths

*/
