import React from "react";
import { Card } from "react-bootstrap";

export const Image = (props) => {
  return (
    <Card style={{ width: "25rem" }} className="mx-auto mb-2">
      <Card.Img variant="top" src={props.pic} />
      <Card.Body>
        <Card.Title>Classified : {props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};
