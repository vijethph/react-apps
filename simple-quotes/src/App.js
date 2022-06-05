import { Route, Routes, Redirect, Navigate } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" replace={true} />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

// <Route path="/" exact render={() => <Redirect to="/quotes" />} />

/*
Routing is used for having different paths that load different pages, which change the visible content of the pages in the app. Page (URL) changes are handled by client-side React code - it changes the visible content without fetching a new HTML file.

React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.

Route is a component that allows us to define a certain path and the React component that should be loaded when that path becomes active in the URL

<Router> is the low-level interface that is shared by all router components (like <BrowserRouter> and <StaticRouter>). In terms of React, <Router> is a context provider that supplies routing information to the rest of the app.

The <Router basename> prop may be used to make all routes and links in your app relative to a "base" portion of the URL pathname that they all share. This is useful when rendering only a portion of a larger app with React Router or when your app has multiple entry points. Basenames are not case-sensitive.

Dynamic routes are defined by a dynamic path segment (:someId) which tells react-router that the overall path for that component can be anything which can take the value of someId. This is a dynamic segment which can take any value. This dynamic value can be extracted in the React component by using useParams hook.

The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes. Example: params : { someId: 123 }

By default, react-router renders all components that match the current path. Example: for a path /products/123, it renders component under /products and also the component under /products/123. To ensure only one of the defined routes can be active at the same time, Switch component can be used.

React-router parses and matches defined routes in top-to-bottom order. Routes can be added to any component as nested routes, but they will be evaluated only when that specific component is active

Whenever the location changes, <Routes> looks through all its children <Route> elements to find the best match and renders that branch of the UI. <Route> elements may be nested to indicate nested UI, which also correspond to nested URL paths.

In react-router v6, parent component matching route can be done by adding /* after the path. Nested routes can be defined in the parent route definition itself as a child component, where the parent route component will be defined in 'element' attribute. In this case, to let react-router know where to render the child route's component, use Outlet.

An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
*/
