import React from "react";
import { Card, Container, Button, Image } from "react-bootstrap";
import Rating from "./Rating"
export default function Summary() {
    
  const newSummary = {
    text: "text",
    firstName: "first Name",
    lastName: "last Name",
    picture: "",
    title: "title",
    category: "category",
    user: "",
    rate:3
  };

  return (
    <div>
      <Container>
        <Card>
          <Card.Header>
              <Rating rate={newSummary.rate}/>
            <Image variant="top" src="*" />
          </Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer>
              <Card.Text>dasdasdadasds</Card.Text>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}
