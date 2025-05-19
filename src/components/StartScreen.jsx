function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>ようこそ！Reactクイズへ！</h2>
      <h3>{numQuestions}問のReact習熟度テスト</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        テストスタート
      </button>
    </div>
  );
}

export default StartScreen;
