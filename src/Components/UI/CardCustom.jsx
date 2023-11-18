import React from "react";
import Card from "react-bootstrap/Card";
import "./CardCustom.css";

const CardCustom = ({ title, children }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span className="text-success-emphasis text-center">{children}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;
