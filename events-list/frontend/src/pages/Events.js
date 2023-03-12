import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// this is not a React function component, hence React hooks cannot be used here
export function loader() {
  return defer({
    events: loadEvents(),
  });
}

/*

userLoaderData - This hook provides the value returned from our route loader.

After route actions are called, the data will be revalidated automatically and return the latest result from our loader.

Note that useLoaderData does not initiate a fetch. It simply reads the result of a fetch React Router manages internally, so we don't need to worry about it refetching when it re-renders for reasons outside of routing.

This also means data returned is stable between renders, so we can safely pass it to dependency arrays in React hooks like useEffect. It only changes when the loader is called again after actions or certain navigations. In these cases the identity will change (even if the values don't).

we can use this hook in any component or any custom hook, not just the Route element. It will return the data from the nearest route on context i.e., we can use useLoaderData() in the element that's assigned to a route AND in all components that might be used inside that element


json() - shortcut for new Response(JSON.stringify())

defer() - This utility allows we to defer values returned from loaders by passing promises instead of resolved values.

< Await /> - Used to render deferred values with automatic error handling. <Await> expects to be rendered inside of a <React.Suspense> or <React.SuspenseList> parent to enable the fallback UI. The <Await /> component will only throw the promise up the <Suspense> boundary on the initial render of the <Await /> component with an unsettled promise. It will not re-render the fallback if props change. Effectively, this means that we will not get a fallback rendered when a user submits a form and loader data is revalidated. we will get a fallback rendered when the user navigates to the same route with different params

<Suspense /> is a React component which is used to display as a fallback while we're waiting for the data to arrive


*/
