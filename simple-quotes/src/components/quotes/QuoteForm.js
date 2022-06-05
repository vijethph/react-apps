import { Fragment, useRef, useState } from "react";
// import { Prompt } from "react-router-dom"; // not supported in v6

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  // disabling prompt on form submit wouldn't work because it is a bit too late, hence the state update wouldn't go through before a navigation action is triggered
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText }); // navigation action is triggered here
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      {isEntering &&
        window.alert(
          "Are you sure you want to leave? All your entered data will be lost!"
        )}
      {/* <Prompt
        when={isEntering}
        message={(location) =>
          `Are you sure you want to leave ${location}? All your entered data will be lost!`
        }
      /> */}
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;

// Prompt component is used to prompt the user before navigating away from a page. When our application enters a state that should prevent the user from navigating away (like a form is half-filled out), render a <Prompt>.
// It needs 2 props: 'when' prop - which needs a Boolean to decide whether the prompt should be shown or not, and 'message' prop - which takes a function with a param 'location' (holds info about page that should be displayed) and returns a string that should be displayed
