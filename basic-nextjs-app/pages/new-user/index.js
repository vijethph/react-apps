import NewUserForm from "../../components/users/NewUserForm";
import { toast } from "react-toastify";
import Head from "next/head";
import { Fragment } from "react";

const NewUserPage = () => {
  const addUserHandler = async (enteredUserData) => {
    try {
      let response = await fetch("/api/new-user", {
        method: "POST",
        body: JSON.stringify(enteredUserData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      toast.success("new user added successfully");
    } catch (error) {
      console.error(error);
      toast.error("oh no! some error occurred");
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Add a new user</title>
        <meta name="description" content="Add users and try out" />
      </Head>
      <NewUserForm onAddUser={addUserHandler} />
    </Fragment>
  );
};

export default NewUserPage;
