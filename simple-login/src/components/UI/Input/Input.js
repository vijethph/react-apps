import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

// useRef() allows us to react with components imperatively - which means not by passing some state to it, but by passing a function into a component
// the ref attribute is supported by all built-in HTML components
// useImperativeHandle() is a hook which allows us to use components by directly calling/manipulating the child component, rather than managing its state.

// there is a second argument for components beside props, which is refs - binds to the parent component utilizing the refs
// forwardRef is a way of returning React component that is capable of being bound to a ref
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus(); // focus() is available on input DOM object
  };

  useImperativeHandle(ref, () => {
    // this function should return an object, which contains all the data you will be able to use from outside
    return {
      focusMe: activate, // point at the internal variable/function you want to control from outside
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
