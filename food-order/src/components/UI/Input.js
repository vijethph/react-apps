import React from "react";

import classes from "./Input.module.css";

// htmlFor is the 'for' attribute for labels
// {...props.input} ensures that all props received are added as attributes to HTML input element
// Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
