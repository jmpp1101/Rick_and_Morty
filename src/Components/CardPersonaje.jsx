import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/CardPersonaje.css';

function CardPersonaje({ personaje }) {
  return (
    <Card style={{ width: '18rem' }} className='cardpersonaje'>
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.name}</Card.Title>
        <Card.Text>
          Este es un personaje de Rick and Morty.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardPersonaje;
