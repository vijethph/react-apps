import { useSelector, useDispatch } from "react-redux";
// useSelector() is a react-redux hook which allows us to extract data from the Redux store state, using a selector function
// it is also possible to get direct access to the store itself by using useStore() which returns a reference to the same Redux store that was passed in to the <Provider> component.
// This hook should probably not be used frequently. However, this may be useful for less common scenarios that do require access to the store, such as replacing reducers.
// useSelector() is more convenient than useStore as it allows to retrieve a part of the state managed by the store
// useDispatch() returns a reference to the dispatch function from the Redux store, which can be used to dispatch actions as needed.

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  // useSelector() requires a function which determines which piece of data needs to be extracted from the store - it is called with the entire Redux store state as its only argument
  // useSelector() will also subscribe to the Redux store, and run the selector function whenever an action is dispatched

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 } - any argument passed into function will be stored in the field 'payload'
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// using class-based components:
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
// bind keyword is used in calling the function so that 'this' keyword refers to state while using it in 'this.props'
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// mapStateToProps receives the Redux state and returns an object where the keys will be available as props in the receiving Class component, and the values are the logic for drilling into that Redux state
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// mapDispatchToProps receives dispatch function, and returns an object where the keys are prop names to be used in class component, and values are functions where actions are dispatched
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// for class-based components, connect() can be used as wrapper around them to connect them to the store
// It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store. It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
// connect() returns a new function as a value, which is executed again by passing the class component inside that new function
// connect() requires 2 arguments which are functions:
// 1. mapStateToProps() - maps Redux state to props which will be received by the class component.
// If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the wrapped component’s props. If we don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps
// 2. mapDispatchToProps() - stores dispatch functions in props, so that in the class component, certain props can be executed as functions which dispatch actions to the Redux store
