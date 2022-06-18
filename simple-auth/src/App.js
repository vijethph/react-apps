import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

/*
Lazy loading means loading certain chunks of the code only then it is needed. In routing, we can split the code by route, so that specific code is downloaded only when a route is visited. Lazy loading can be done with the help of React.lazy()

The React.lazy function lets us render a dynamic import as a regular component. React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.

The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

The fallback prop accepts any React elements that we want to render while waiting for the component to load. We can place the Suspense component anywhere above the lazy component. We can even wrap multiple lazy components with a single Suspense component. Suspense lets components “wait” for something before rendering.

2 types of authentication:'
1. Server-side sessions - store unique identifier on server, and send some identifier to the client. Client sends identifier along with requests to protected resources
2. Authentication tokens - create (but not store) "permission" token on server, and sent this token to client. Client sends token along with requests to protected resources

*/
