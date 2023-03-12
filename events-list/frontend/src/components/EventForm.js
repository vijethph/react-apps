import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";
import { getAuthToken } from "../util/auth";
import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"), // fields passed as "name" attributes in HTML input elements
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }

  const token = getAuthToken();
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
}

/*
The useNavigate hook returns a function that lets us navigate programmatically

The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.


useActionData - This hook provides the returned value from the previous navigation's action result, or undefined if there was no submission. The most common use-case for this hook is form validation errors. If the form isn't right, we can return the errors and let the user try again

The Form component is a wrapper around a plain HTML form that emulates the browser for client side routing and data mutations. It is not a form validation/state management library like we might be used to in the React ecosystem. This component automatically does event.preventDefault() on form submit and calls the action with form data. By default, Form triggers the action registered on current active route, which can be changed by passing in 'action' prop and specifying the path.

All of this will trigger state updates to any rendered useNavigation hooks so we can build pending indicators and optimistic UI while the async operations are in-flight.

*/
