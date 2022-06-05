import { Fragment, useEffect } from "react";
import { useParams, Route, Routes, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  // const match = useMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  // console.log("match object", match);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path="/*"
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};

export default QuoteDetail;

// the anchor HTML elements can be used to load different React components, but they refresh the page, causing state loss. To avoid that, Link component can be used.
// A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to. This means that things like right-clicking a <Link> work as it is expected. We can use <Link reloadDocument> to skip client side routing and let the browser handle the transition normally (as if it were an <a href>).

// if we want to change the route path name, then it needs to be changed in all the components that use nested routes. To avoid that, useRouteMatch hook can be used, which provides info about the currently loaded route, not just the URL, but also some internally managed react-router data
// useRouteMatch provides an object having these properties: isExact - which tells if path is exact or not, params - current dynamic route path segment object, path - current route path, and url
// It is okay to have dynamic route path placeholder, or the exact path value in nested routes, example: both /quotes/:quoteId and /quotes/123 works in nested routes
