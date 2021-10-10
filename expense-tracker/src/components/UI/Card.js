// In past React projects, it was necessary to import 'React' in all component files. Now its not needed, importing ReactDOM in 'index.js' file is sufficient enough
import React from "react";

import "./Card.css";

// 'props.children' is a special prop which every component receives, even if its never set explicitly. 'children' is a reserved name, it is not used as attribute name during declaration.
// The calue of 'props.children' is always the content between opening and closing tags of shell/container custom component
const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
