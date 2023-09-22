import React, { useState, useEffect } from 'react';

const MatchOrganizer = ({ players , setMatches, matches}) => {
  

  useEffect(() => {
     // eslint-disable-next-line
   
    
    const organizeMatches = () => {
        let organizedMatches = [];
        let fixedPlayer = players[0];
        let rotatingPlayers = players.slice(1);
        
        for (let i = 0; i < 7; i++) {
            let match1, match2;
            
            // Hacer que el "jugador fijo" juegue 3 partidos en la pista 1 y 4 en la pista 2
            if ([0, 1, 2].includes(i)) {
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
    if (players.length === 8) {
        organizeMatches();
      }
}, [players]);

  return (
    <div>
      <h2>Partidos organizados</h2>
      {matches && matches.map((turn, index) => (
        <div key={index}>
          <h3>Turno {index + 1}</h3>
          <p>Pista 1: {turn[0].join(', ')}</p>
          <p>Pista 2: {turn[1].join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchOrganizer;
