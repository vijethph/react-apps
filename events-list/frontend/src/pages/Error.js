import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import PageContent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  
  console.log(JSON.stringify(error));

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;

/*
useRouteError - Inside of an errorElement, this hook returns anything thrown during an action, loader, or rendering.

When a route error response is thrown from an action or loader, it will be unwrapped into an ErrorResponse so that our component doesn't have to deal with the complexity of unwrapping it (which would require React state and effects to deal with the promise returned from res.json())

*/
