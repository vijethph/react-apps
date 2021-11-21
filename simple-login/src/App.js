import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

// useEffect() is a built-in hook which is called with 2 arguments.
// 1st argument is a function that should be executed after every component evaluation if the specified dependencies are changed
// the specified dependencies are the 2nd argument - the function only runs if these are changed
// useEffect(() => { .....  }, [dependencies]);

// useReducer() is another built-in hook which is used for multiple complex states that cannot be easily handled by useState()
// useReducer() always returns two values.
// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
// where:
// state - the state snapshot used in the component re-render cycle
// dispatchFn - a function that can be used to dispatch a new action (i.e., trigger an update of the state)
// reducerFn - a function that is triggered automatically once an action is dispatched (via dispatchFn). It receives the latest state snapshot and should return the new updated state.
// initFn - function to set initialState

// React Context - Component-wide, "behind-the-scenes" State Storage, which allows us to trigger an action in it, and directly pass that to relevant component without building a long prop chain
// we can also setup a dynamic context, where we pass not only data, but also functions

function App() {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // this runs only once throughout react app lifecycle, as it has no dependencies
  // useEffect(() => {
  //   const storedInfo = localStorage.getItem("isLoggedIn");
  //   if (storedInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  // return (
  //   <React.Fragment>
  //     <AuthContext.Provider
  //       value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
  //     >
  //       <MainHeader onLogout={logoutHandler} />
  //       <main>
  //         {!isLoggedIn && <Login onLogin={loginHandler} />}
  //         {isLoggedIn && <Home onLogout={logoutHandler} />}
  //       </main>
  //     </AuthContext.Provider>
  //   </React.Fragment>
  // );

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

// useState() - the main state management "tool", great for independent pieces of state / data, best if state updates are easy and limited to few types of updates
// useReducer() - best for "more power", should be considered if you have related pieces of state/data, can be helpful if you have complex state updates

// AuthContext.Provider is the component that is contained within context object. All components wrapped within this component will have access to the context, others don't.
// we can listen to context in 2 ways - using AuthContext.Consumer or by using React Hook

// React Context Limitations:
// it is not a replacement for component-wide configuration
// it is not optimized for high frequency changes
// it shouldn't be used to replace ALL communications and props

// Redux can be used for component-wide high frequency changes

// Rules for Hooks:
// only call react hooks in react function components or inside custom hooks
// only call react hooks at the top level, not in any nested functions or block statements
// for useEffect: ALWAYS add everything you refer to inside of useEffect() as a dependency
