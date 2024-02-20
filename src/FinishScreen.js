function FinishScreen({ points, maxpossiblepoints, highscore }) {
  return (
    <>
      <p className="result">
        You scored {points} out of {maxpossiblepoints}
      </p>
      <p className="highscore ">Highscore : {highscore}</p>
    </>
  );
}
export default FinishScreen;
