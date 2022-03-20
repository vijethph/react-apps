import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  // return the states and functions that will be used in the components that use this custom hook
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;

// A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks. Custom hooks outsource stateful logic into re-usable functions.
// When the custom hook gets called in a component which registers a state or an effect (i.e., if the custom hook uses state/effect), then this state/effect will be tied to the component where the custom hook is used
