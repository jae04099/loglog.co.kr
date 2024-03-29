import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ScrollToTop from "./utils/scrollToTop";
import App from "./App";
import Answer from "./pages/Answer";
import Result from "./pages/Result";
import "./reset.css";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById("root"),
);
