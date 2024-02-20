function NextButton({ dispatch, answer, index, numQuestions }) {
  if (index + 1 < numQuestions) {
    if (answer != null) {
      return (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      );
    }
  }

  if (index + 1 === numQuestions) {
    if (answer != null) {
      return (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "Finish" })}
        >
          Finish
        </button>
      );
    }
  }
}
export default NextButton;
