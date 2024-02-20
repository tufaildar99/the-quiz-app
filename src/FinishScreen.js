function FinishScreen({ points, maxpossiblepoints, highscore, dispatch }) {
  return (
    <>
      <p className="result">
        You scored {points} out of {maxpossiblepoints}
      </p>
      <p className="highscore ">Highscore : {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
export default FinishScreen;
