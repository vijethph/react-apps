import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// these kind of action creators can perform side-effects, and then dispatch other actions, which eventually reach the reducers as part of flow of side-effects/steps that should be taken
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://httpstat.us/200");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      // const cartData = await fetchData();
      // dispatch(
      //   cartActions.replaceCart({
      //     items: cartData.items || [],
      //     totalQuantity: cartData.totalQuantity,
      //   })
      // );
      console.log("fetched data");
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

// Redux, along with accepting action objects like this: { type: ..., payload: ...}, also accepts action creators that return functions, and executes those functions
// this is the "thunk action creator" which returns a "thunk function"
export const sendCartData = (cart) => {
  // this is a thunk function which calls the action creator (showNotification()) to dispatch the action object
  // thunks can also access current state by calling getState() method (this should be passed into thunk)
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const fetchData = async () => {
      const response = await fetch("https://httpstat.us/200");

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    const sendRequest = async () => {
      const response = await fetch("https://httpstat.us/200", {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      // await sendRequest();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
      // const cartData = await fetchData();
      // dispatch(
      //   cartActions.replaceCart({
      //     items: cartData.items || [],
      //     totalQuantity: cartData.totalQuantity,
      //   })
      // );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
