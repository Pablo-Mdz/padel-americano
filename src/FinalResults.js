import React from 'react';

const FinalResults = ({ playerScores }) => {
  // Ordenar los jugadores por puntaje de mayor a menor
  const sortedPlayers = playerScores ? Object.keys(playerScores).sort((a, b) => playerScores[b] - playerScores[a]) : [];


  return (
    <div>
      <h2>Resultados Finales</h2>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player}</td>
              <td>{playerScores[player]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalResults;
