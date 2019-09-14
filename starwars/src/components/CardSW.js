import React from "react";
import { Card } from "semantic-ui-react";

const CharactersCard = props => {
  return (
    <Card className="cardSW">
      <Card.Content>
        <Card.Header>Name: {props.value.name}</Card.Header>
        <Card.Description>Gender: {props.value.gender}</Card.Description>
        <Card.Description>Height: {props.value.height}</Card.Description>
        <Card.Description>Weight: {props.value.mass}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CharactersCard;
