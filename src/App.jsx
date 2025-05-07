import React, { useEffect, useReducer } from "react";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";

const initialState = {
  question: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "ready" };
    default:
      throw new Error("挙動がわかりません");
    case "dataFailed":
      return { ...state, status: "error" };
    case "ready":
      return { ...state, status: "ready" };
    case "active":
      return { ...state, status: "active" };
    case "finished":
      return { ...state, status: "finished" };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <MainContent>
        <p>1/15</p>
        <p>質問は？</p>
      </MainContent>
    </div>
  );
}
