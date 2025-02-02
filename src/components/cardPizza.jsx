import React from "react";
import { Card, Button } from "react-bootstrap";

const CardPizza = ({ name, price, ingredients, img }) => (
  <Card className="m-3 shadow-sm" style={{ width: "18rem" }}>
    <Card.Img variant="top" src={img} alt={name} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <strong>Precio:</strong> ${price.toLocaleString()} <br />
        <strong>Ingredientes:</strong> {ingredients.join(", ")}
      </Card.Text>
      <Button variant="primary" className="me-2">Ver más</Button>
      <Button variant="success">Añadir</Button>
    </Card.Body>
  </Card>
);

export default CardPizza;
