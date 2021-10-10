import React from "react";

import "./ExpenseDate.css";

// props are used to pass data from parent to child component
// props has key-value pair of items, where key -> attribute, value -> value in quotes/curly braces
// props can be accessed anywhere, even outside return(<div> ... </div);
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // Use {} in JSX to put variable values declared earlier in code. These {} can also contain basic JS expressions like {1+1} or {Math.random()}
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
