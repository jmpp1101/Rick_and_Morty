import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPersonaje({ id }) {
  const [nombrePersonaje, setNombrePersonaje] = useState('');
  const [imagenPersonaje, setImagenPersonaje] = useState('');

  useEffect(() => {
    const obtenerDatosDeAPI = async () => {
      try {
        // Realizar la petición para obtener los datos del personaje
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        
        // Actualizar el estado con los datos obtenidos
        setNombrePersonaje(data.name);
        setImagenPersonaje(data.image);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    // Llamar a la función para obtener datos de la API cuando el componente se monta
    obtenerDatosDeAPI();
  }, [id]); // Se pasa el id como dependencia para que se actualice cuando cambie

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagenPersonaje} />
      <Card.Body>
        <Card.Title>{nombrePersonaje}</Card.Title>
        <Card.Text>
          Este es un personaje de Rick and Morty.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPersonaje;
