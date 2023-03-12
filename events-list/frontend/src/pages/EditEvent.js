import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
}

export default EditEventPage;

/*
useRouteLoaderData - This hook makes the data at any currently rendered route available anywhere in the tree. This is useful for components deep in the tree needing data from routes much farther up, as well as parent routes needing the data of child routes deeper in the tree.

React Router stores data internally with deterministic, auto-generated route ids, but we can supply our own route id to make this hook much easier to work with. The only data available is the routes that are currently rendered. If we ask for data from a route that is not currently rendered, the hook will return undefined

useLoaderData - same level, useRouteLoaderData - higher / any level
*/
