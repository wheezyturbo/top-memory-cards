
export default function GameOverPopUp({items,highScore,retryFn}) {
  return (
    <div className="start-menu">
      <div>
      <h2>You Scored: {items}</h2> 
      <p>Your highest Score : {highScore}</p>
      <button onClick={retryFn}>Play Again</button>
    </div>
    </div>
  )
}
