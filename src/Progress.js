function Progress({ index, numQuestions, maxPossiblepoints, answer, points }) {
  return (
    <header className="progress">
      <progress max={maxPossiblepoints} val={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblepoints}
      </p>
    </header>
  );
}
export default Progress;
