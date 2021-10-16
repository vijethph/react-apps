import React from "react";
// import styled from "styled-components";

import styles from "./Button.module.css"; // the import for CSS Modules should be like this, with file named like this
// this is a JS object, where every class defined is a property

// for styled components, whatever styles passed between `` will directly affect the component, so CSS class selectors are not necessary
// for pseudo selectors (like .button:hover) you can use & symbol
// the library converts these styles into auto-generated unique class names that can be applied globally without affecting others

// CSS Modules is a feature which is only available in projects that are configured to support it as it needs some code transformation. By default CRA has it.
// it changes the CSS class names to be unique, and scoped to specific component

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
