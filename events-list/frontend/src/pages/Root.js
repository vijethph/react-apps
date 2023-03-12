import { useEffect } from "react";
import {
  Outlet,
  useNavigation,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import { getTokenDuration } from "../util/auth";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

/*
An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.


useNavigation - This hook tells we everything we need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations. Things like:

Global loading indicators
Disabling forms while a mutation is happening
Adding busy indicators to submit buttons
Optimistically showing a new record while it's being created on the server
Optimistically showing the new state of a record while it's being updated

*/
