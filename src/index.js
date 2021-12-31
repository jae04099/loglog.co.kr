import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Main from "./pages/Main"
import Answer from "./pages/Answer"
import Question from "./pages/Question"
import Result from "./pages/Result"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="answer" element={<Answer />} />
      <Route path="question" element={<Question />} />
      <Route path="result" element={<Result />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
