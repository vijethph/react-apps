import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log("in expenses component");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  // array.filter() method filters array elements based on a condition
  // it returns new array - where only elements for true condition are kept
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // If there is a custom component with no content between opening and closing tags, then we can write it as self-closing i.e., <Component/>
  // when two-way binding is implemented for a component, it is called a "controlled" component
  // array.map() method creates a new array populated with the results of calling a provided function on every element in the calling array
  // if there is array of elements like this in JSX Code: {[ <Card/>, <Card/>, ]} React will simply render these components side-by-side

  // for rendering dynamic lists, "key" prop is necessary
  // without it, React re-renders entire list of elements in order to maintain array order present in code. any state for those list elements would be lost on re-rendering by adding new item
  // if there is no unique ID that can be given to "key", then you can use the automatically generated "index", but its discouraged

  // alternative way for ternary operator: {filteredExpenses.length === 0 && <p>No expenses found</p>}
  // and {filteredExpenses.length > 0 && filteredExpenses.map(....)
  // JS will return latter part of "&&", if the first condition is met
  // JSX content can also be stored like this and used anywhere: let abc = <p>Hello</p>;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

//  {
//    filteredExpenses.length === 0 ? (
//      <p>No expenses found</p>
//    ) : (
//      filteredExpenses.map((expense) => (
//        <ExpenseItem
//          key={expense.id}
//          title={expense.title}
//          amount={expense.amount}
//          date={expense.date}
//        />
//      ))
//    );
//  }
