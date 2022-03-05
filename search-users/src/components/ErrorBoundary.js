import { Component } from "react";

// error boundaries can be used to transport errors from one component to another and display them
// error boundaries are regular class-based components, with one difference: they implement componentDidCatch() method
// any class which implements componentDidCatch() method can be called as an error boundary
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  // this returns props.children because error boundary wraps around components which might throw errors
  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
