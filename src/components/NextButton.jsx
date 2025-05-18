function NextButton({ index, answer, dispatch, numQuestions }) {
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
        disabled={answer === null}
      >
        次へ
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
        disabled={answer === null}
      >
        終了
      </button>
    );
}

export default NextButton;
