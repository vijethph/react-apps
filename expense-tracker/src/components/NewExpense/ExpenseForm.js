import React, { useState } from "react";

import "./ExpenseForm.css";

// two-way binding - not just listening to state changes, but also passing new values back into state/input
// props can only be passed from parent to direct child, we cannot skip between components

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // it is ok to have multiple useState, however they can be combined by using:
  // const [userInput,setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });
  // drawback: you have to update all the states at once, for any change done
  // it is your responsibility to preserve previous state, and only update what is relevant

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // like this we can do for the rest of state variables
    // but updating state based on previous state is not usually done like this
    // instead, this approach is followed:
    // setUserInput((prevState) => {
    //   // here prevState is the latest state snapshot, keeping all scheduled state updates in mind
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   }
    // });
    // because, React schedules state updates, it doesn't do them instantly
    // scheduling a lot of state updates at same time may depend on incorrect state snapshot sometimes
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // forms by default refresh webpage and submit information to server. This function prevents that
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData); // function saveExpenseDataHandler is called, with this expenseData as argument

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
