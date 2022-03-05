import { Component } from "react";

import classes from "./User.module.css";

// in order to receive props, the class should inherit Component class
class User extends Component {
  // we can add a constructor() method for some initialization, but it is not required here
  componentWillUnmount() {
    console.log("User will unmount!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
