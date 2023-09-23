import React, { useState } from 'react';
import MatchOrganizer from './MatchOrganizer';
import MatchResultsInput from './MatchResultsInput';
import FinalResults from './FinalResults';
import PartialResults from './PartialResults';



const PlayerInput = ({ setPlayers }) => {
    const [name, setName] = useState('');

    const addPlayer = () => {
        setPlayers(prevPlayers => [...prevPlayers, name]);
        console.log("name:", name)
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
    const [matches, setMatches] = useState([]);
    const [playerScores, setPlayerScores] = useState({});
    const [partialResults, setPartialResults] = useState({});
    const [currentMatchIndex, setCurrentMatchIndex] = useState(0); // Inicialmente, el primer partido
    const [matchResult, setMatchResult] = useState({ team1: '', team2: '' });
    const [matchPlayers, setMatchPlayers] = useState({ p1: '', p2: '', p3: '', p4: '' });
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        // Actualizar los resultados parciales para el partido actual
        const currentPartialResults = {};
        const matchIndex = currentMatchIndex + 1; // Índice del partido actual
        // Calcula los resultados parciales para cada jugador en el partido actual y guárdalos en currentPartialResults
        
        // Actualiza el estado de resultados parciales
        setPartialResults({ ...partialResults, [matchIndex]: currentPartialResults });
        
        // Avanza al siguiente partido
        setCurrentMatchIndex(currentMatchIndex + 1);
        
        // Limpia el formulario de resultados del partido
        setMatchResult({ team1: '', team2: '' });
        setMatchPlayers({ p1: '', p2: '', p3: '', p4: '' });
    };
    
    
    
    
    
    const updatePlayerScores = (newPlayerScores) => {
        console.log("Updating player scores with new player scores:", newPlayerScores);
        setPlayerScores(newPlayerScores);
        console.log('this is a player score', playerScores)
        
    };
    const resetIndividualMatchScores = () => {
        // Crear una copia profunda de playerScores para evitar la mutación directa del estado
        const newPlayerScores = JSON.parse(JSON.stringify(playerScores));
    
        // Iterar sobre cada jugador y restablecer sus puntuaciones de partidos individuales
        for (const playerName in newPlayerScores) {
            if (newPlayerScores.hasOwnProperty(playerName)) {
                // Supongamos que tienes puntuaciones de partidos individuales en una propiedad 'matches'
                // Puedes cambiar esto para que coincida con tu estructura de datos
                newPlayerScores[playerName].matches = 0;
            }
        }
    
        // Actualizar el estado con las nuevas puntuaciones
        setPlayerScores(newPlayerScores);
    };
    
    return (
        <div>
            <h1>Organizador de partidos de pádel</h1>
            <PlayerInput setPlayers={setPlayers} />
            <MatchOrganizer players={players} setMatches={setMatches} matches={matches} />
            <MatchResultsInput
                organizedMatches={matches}
                updatePlayerScores={updatePlayerScores}
                playerScores={playerScores}
                setMatchResult={setMatchResult} // Pasa las funciones como propiedades
                setMatchPlayers={setMatchPlayers} // Pasa las funciones como propiedades
                setPlayerScores={setPlayerScores} // Pasa las funciones como propiedades
                matchResult={matchResult} // Pasa los valores como propiedades
                matchPlayers={matchPlayers} // Pasa los valores como propiedades
                />
                <button onClick={resetIndividualMatchScores}>Restablecer resultados de partidos individuales</button>

            <PartialResults playerScores={playerScores} currentMatchIndex={currentMatchIndex} />
            <FinalResults playerScores={playerScores} />
        </div>
    );
};


export default App;
