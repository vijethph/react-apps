import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// onSaveExpenseData is a custom event prop that we can define, which can pass "function" as a value, to child component, where it can be triggered
// this is basically like passing a pointer to a function
// since onSaveExpenseData is not a built-in prop like onChange, it needs to be called in child component explicitly
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);

    props.onAddExpense(expenseData); // again, call parent's function passed as a pointer
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // this function is passed as a pointer, to the child component
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false ? (
        <button onClick={startEditingHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
