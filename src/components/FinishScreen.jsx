function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100);
  const emoji =
    percentage === 100
      ? "🎉"
      : percentage >= 80
      ? "😃"
      : percentage >= 50
      ? "😐"
      : "😢";

  return (
    <div>
      <h1>お疲れ様でした！</h1>
      <p className="result">
        <span>{emoji}</span>あなたの得点は{maxPossiblePoints}点中
        <strong>{points}</strong>点({percentage}%)です。
      </p>
      <p className="highscore">最高点：{highscore} 点</p>
    </div>
  );
}

export default FinishScreen;
