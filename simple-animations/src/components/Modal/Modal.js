import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;

/*
CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition. The first class is applied and then a second *-active class in order to activate the CSS transition. After the transition, matching *-done class names are applied to persist the transition state.

When the in prop is set to true, the child component will first receive the class example-enter, then the example-enter-active will be added in the next tick. CSSTransition forces a reflow between before adding the example-enter-active. This is an important trick because it allows us to transition between example-enter and example-enter-active even though they were added immediately one after another. Most notably, this is what makes it possible for us to animate appearance.

*/
