import React from "react";
import './style/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/posts">
          <Post/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
