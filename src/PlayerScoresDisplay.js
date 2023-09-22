const PlayerScoresDisplay = ({ playerScores }) => {


    return (
        <div>
            <h2>Puntuaciones de jugadores</h2>
            <ul>
                {Object && Object.keys(playerScores).map((playerName, index) => {
                    return (
                        <li key={index}>
                            {playerName}: {playerScores[playerName] || 0}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default PlayerScoresDisplay  