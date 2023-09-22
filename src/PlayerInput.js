import React, { useState } from 'react';

const PlayerInput = ({ setPlayers }) => {
  const [name, setName] = useState('');

  const addPlayer = () => {
    setPlayers(prevPlayers => [...prevPlayers, name]);
    setName('');
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addPlayer}>Agregar jugador</button>
    </div>
  );
};

export default PlayerInput;
