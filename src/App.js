import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
