import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <Container>
      <Card>
        <Card.Header>Hello World!</Card.Header>
        <Card.Body>
          {!changedText && <Output>It's good to see you!</Output>}
          {changedText && <Output>Changed!</Output>}
          <Button onClick={changeTextHandler}>Change Text!</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Greeting;
