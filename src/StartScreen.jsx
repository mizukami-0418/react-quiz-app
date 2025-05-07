function StartScreen({ numberOfQuestions }) {
  return (
    <div className="start">
      <h2>ようこそ！Reactクイズへ！</h2>
      <h3>{numberOfQuestions}問のReact習熟度テスト</h3>
      <button className="btn btn-ui">テストスタート</button>
    </div>
  );
}

export default StartScreen;
