import React, { useState } from 'react';
import MatchOrganizer from './MatchOrganizer';
import MatchResultsInput from './MatchResultsInput';
import FinalResults from './FinalResults';


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

const App = () => {
    const [players, setPlayers] = useState([]);
    const [matches, setMatches] = useState([]);  // Añadir este estado aquí
    const [playerScores, setPlayerScores] = useState({});

    const updatePlayerScores = (matchResult, matchPlayers) => {
        // Supongamos que matchResult es un objeto con la forma { team1: 15, team2: 13 }
        // y matchPlayers es un array con la forma [jugador1, jugador2, jugador3, jugador4]
        // donde jugador1 y jugador2 son del equipo 1, y jugador3 y jugador4 son del equipo 2

        setPlayerScores(prevScores => {
            const newScores = { ...prevScores };

            // Actualizar los puntajes del equipo 1
            newScores[matchPlayers[0]] = (newScores[matchPlayers[0]] || 0) + parseInt(matchResult.team1, 10);
            newScores[matchPlayers[1]] = (newScores[matchPlayers[1]] || 0) + parseInt(matchResult.team1, 10);

            // Actualizar los puntajes del equipo 2
            newScores[matchPlayers[2]] = (newScores[matchPlayers[2]] || 0) + parseInt(matchResult.team2, 10);
            newScores[matchPlayers[3]] = (newScores[matchPlayers[3]] || 0) + parseInt(matchResult.team2, 10);

            return newScores;
        });
    };



    return (
        <div>
            <h1>Organizador de partidos de pádel</h1>
            <PlayerInput setPlayers={setPlayers} />
            <MatchOrganizer players={players} setMatches={setMatches} matches={matches} />
            <MatchResultsInput organizedMatches={matches} updatePlayerScores={updatePlayerScores} />
            <FinalResults playerScores={playerScores} />
        </div>
    );
};

export default App;

