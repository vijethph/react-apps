import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// React.memo is only for functional components; it optimizes them. React looks at the props received by this component, compares old and new values and re-evaluates/re-executes the component only if the props are changed
export default React.memo(Button);
