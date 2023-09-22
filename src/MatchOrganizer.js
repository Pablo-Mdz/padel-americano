// Component to display and organize matches

import React from 'react'; 
import { useState } from 'react';


const MatchOrganizer = ({ players }) => {
    const [matches, setMatches] = useState([]);
  
    const organizeMatches = () => {
      if (players.length !== 8) {
        alert('Necesitas 8 jugadores para organizar los partidos.');
        return;
      }
  
      let fixedPlayer = players[0];
      let rotatingPlayers = players.slice(1);
      let organizedMatches = [];
  
      for (let i = 0; i < 7; i++) {
        let match1, match2;
  
        // Alternar jugadores entre las dos pistas
        if (i % 2 === 0) {
          match1 = [fixedPlayer, rotatingPlayers[i], rotatingPlayers[(i + 1) % 7], rotatingPlayers[(i + 2) % 7]];
          match2 = [rotatingPlayers[(i + 3) % 7], rotatingPlayers[(i + 4) % 7], rotatingPlayers[(i + 5) % 7], rotatingPlayers[(i + 6) % 7]];
        } else {
          match2 = [fixedPlayer, rotatingPlayers[i], rotatingPlayers[(i + 1) % 7], rotatingPlayers[(i + 2) % 7]];
          match1 = [rotatingPlayers[(i + 3) % 7], rotatingPlayers[(i + 4) % 7], rotatingPlayers[(i + 5) % 7], rotatingPlayers[(i + 6) % 7]];
        }
  
        organizedMatches.push([match1, match2]);
      }
  
      setMatches(organizedMatches);
    };
  
    return (
      <div>
        <button onClick={organizeMatches}>Organizar partidos</button>
        {matches.map((turn, index) => (
          <div key={index}>
            <h3>Turno {index + 1}</h3>
            <p>Pista 1: {turn[0].join(', ')}</p>
            <p>Pista 2: {turn[1].join(', ')}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MatchOrganizer