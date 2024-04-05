import React, { useState, useEffect } from 'react';
import CardPersonaje from './CardPersonaje';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/Personajes.css';

function Personajes() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setMaxPage(data.info.pages);
      })
      .catch(error => console.error('Error fetching characters:', error));
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <div className="personajes">
      <h2>Lista de Personajes</h2>
      <div className="personajes-list">
        <Row xs={1} md={2} lg={3} className='fila'> {/* Una columna en dispositivos móviles y tres columnas en dispositivos de escritorio */}
          {characters.map(personaje => (
            <Col key={personaje.id}>
              <CardPersonaje personaje={personaje} />
            </Col>
          ))}
        </Row>
      </div>
 
      {page !== 1 && (
            <Button variant="secondary" onClick={previousPage}>Anterior</Button>
          )}
      {page !== maxPage && (
            <Button variant="primary" onClick={nextPage}>Siguiente</Button>
          )}
    </div>
  );
}

export default Personajes;
