import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.id;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title: taskText, body: taskText, userId: 1 },
      },
      createTask.bind(null, taskText) // this is the data transformation function which gets executed after http request
      // bind allows to reconfigure the function. first argument allows us to set the 'this' keyword, second argument passed will be the first parameter received by the function
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
