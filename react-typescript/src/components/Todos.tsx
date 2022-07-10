import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

/*
React.FC allows to convert functional components into generic functions, which means the functional component will behave like a normal React component and has all the base props like children, along with explicitly defining our own props.

In order to merge our own props with the standard ones, example: React.FC<{ items: string[] }>. React.FC is a generic type, which needs to be explicitly set to be a concrete type that receives standard props and our custom props.

We can use class names as types. bind() is a default JS method which allows us to pre-configure a function for future execution, where 1st argument is equivalent to 'this' keyword, and 2nd argument is the object the function will receive later.
*/
