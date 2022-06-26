import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <Container>
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item key={post.id} role="listitem">
            {post.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Async;
