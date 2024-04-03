import React from 'react';
import CardPersonaje from './Components/CardPersonaje';

function App() {
  return (
    <div>
      <CardPersonaje id={1} />
      <CardPersonaje id={2} />
      {/* Agrega más componentes CardPersonaje con los ids correspondientes */}
    </div>
  );
}

export default App;