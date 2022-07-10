import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
// import { useState } from "react";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const addTodoHandler = (todoText: string): void => {
  //   const newTodo = new Todo(todoText);
  //   setTodos((prevTodos) => prevTodos.concat(newTodo));
  // };
  // const removeTodoHandler = (todoId: string) => {
  // setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== todoId));
  //}
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;

/*
TypeScript is a "superset" to JavaScript which adds static typing to it
*/
