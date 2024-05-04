import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Homepage />
      </div>
    </>
  );
}

export default App;
