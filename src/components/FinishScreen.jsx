import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percentage = Math.round((points / maxPossiblePoints) * 100);
  const emoji =
    percentage === 0
      ? "🤦‍♂️"
      : percentage === 100
      ? "🥇"
      : percentage >= 80
      ? "🎉"
      : percentage >= 50
      ? "🙃"
      : "🤨";

  return (
    <div>
      <h1>お疲れ様でした！</h1>
      <p className="result">
        <span>{emoji}</span>あなたの得点は{maxPossiblePoints}点中
        <strong>{points}</strong>点({percentage}%)です。
      </p>
      <p className="highscore">最高点：{highscore} 点</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        もう一度
      </button>
    </div>
  );
}

export default FinishScreen;
