const IndividualResults = ({ playerScores }) => {
    return (
      <div className="individual-results-box">
        <h2>Resultados Individuales</h2>
        {playerScores && Object.keys(playerScores).map((player, index) => (
          <div key={index}>
            <span>{player}:</span>
            <span>{playerScores[player].total}</span>
          </div>
        ))}
      </div>
    );
  };
export default IndividualResults  