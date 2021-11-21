// you can have multiple contexts for multiple global states in your app, or just one context for a bigger state, depending on use case
import React, { useState, useEffect } from "react";

// creates a context object - basically an app / component-wide state
// takes a default context as a param, can be simple string or complex object
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});
// returns an object that contains components

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // this runs only once throughout react app lifecycle, as it has no dependencies
  useEffect(() => {
    const storedInfo = localStorage.getItem("isLoggedIn");
    if (storedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// to use this context in your app, do 2 things:
// "provide" it - all components that are wrapped by it, should have access to it
// consume it - hook into it / listen to it
