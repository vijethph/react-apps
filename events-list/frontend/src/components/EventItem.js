import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const token = useRouteLoaderData("root");
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" }); // takes 2 arguments - data to submit, and a set of options that map directly to form submission attributes
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token && (
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      )}
    </article>
  );
}

export default EventItem;

/*

A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to, and prevents the browser default of refreshing the page. Links work only if they are rendered inside RouterProvider.

By default, links are relative to the route hierarchy, so .. will go up one Route level. Occasionally, we may find that we have matching URL patterns that do not make sense to be nested, and we'd prefer to use relative path routing. we can opt into this behavior with 'relative' prop
relative="route" - link segment will get added to currently active route
relative="path" - link segment will get added to currently active path

useSubmit - The imperative version of <Form> that lets us, the programmers, submit a form instead of the user. This can also be useful if we'd like to automatically sign someone out of our website after a period of inactivity.

*/
