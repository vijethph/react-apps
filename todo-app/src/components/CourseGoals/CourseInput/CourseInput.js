import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// import "./CourseInput.css"; // these styles are not restricted to this component only, it applies to everywhere

// styled components forward all props you set on them, to the underlying components, and they can be used in CSS statements as well
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalidAttribute ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalidAttribute ? "red" : "#ccc")};
//     background: ${(props) =>
//       props.invalidAttribute ? "#ffd7d7" : "transparent"};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // check if user entered just blank spaces or empty string
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // in JSX, CSS properties are written in camelCase
  // conditional, dynamic inline styles could be used, but they are not preferable. So, dynamic CSS Classes can be used with the help of template literals - `....${}`
  // Ex: <div className={`form-control ${!isValid ? "invalid" : ""}`}>
  // <FormControl className={!isValid && "invalid"}>
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

/* using inline styles:

<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
<input type="text" style={{
        borderColor: !isValid ? "red" : "#ccc",
        background: !isValid ? "salmon" : "transparent",
          }}
    onChange={goalInputChangeHandler}  />
*/

/* using styled component with dynamic props:
<FormControl invalidAttribute={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
</FormControl>

*/
