import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>ようこそ！Reactクイズへ！</h2>
      <h3>{numQuestions}問のReact習熟度テスト</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's play👉
      </button>
    </div>
  );
}

export default StartScreen;
