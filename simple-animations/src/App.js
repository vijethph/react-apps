import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            />
          )}
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

/*
Using CSS transitions and animations populates the DOM with lots of elements having opacity set to 0, which may not be good for accessibility. It is possible to manipulate CSS transitions using React state on components, but it may not work for all animations.

React Transition Group is a package which allows us to smoothly animate elements when they're added and removed from the DOM. It exposes simple components useful for defining entering and exiting transitions. React Transition Group is not an animation library like React-Motion, it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.


The Transition component lets us describe a transition from one component state to another over time with a simple declarative API. Most commonly it's used to animate the mounting and unmounting of a component, but can also be used to describe in-place transition states as well.

By default the Transition component does not alter the behavior of the component it renders, it only tracks "enter" and "exit" states for the components. It's up to us to give meaning and effect to those states. For example we can add styles to a component when it enters or exits.

Transition state is toggled via the 'in' prop. When true the component begins the "Enter" stage. During this stage, the component will shift from its current transition state, to 'entering' for the duration of the transition and then to the 'entered' stage once it's complete
*/
