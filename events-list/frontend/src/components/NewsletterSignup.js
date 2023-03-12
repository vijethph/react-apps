import { useEffect } from "react";
import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;

/*
useFetcher

In HTML/HTTP, data mutations and loads are modeled with navigation: <a href> and <form action>. Both cause a navigation in the browser. The React Router equivalents are <Link> and <Form>.

But sometimes we want to call a loader outside of navigation, or call an action (and get the data on the page to revalidate) without changing the URL. Or we need to have multiple mutations in-flight at the same time.

Many interactions with the server aren't navigation events. This hook lets us plug our UI into our actions and loaders without navigating.

This is useful when we need to:

fetch data not associated with UI routes (popovers, dynamic forms, etc.)
submit data to actions without navigating (shared components like a newsletter sign ups)
handle multiple concurrent submissions in a list (typical "todo app" list where we can click multiple buttons and all should be pending at the same time)
infinite scroll containers

*/
