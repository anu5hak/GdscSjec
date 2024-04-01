import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Event";
import Eventsmain from "./Components/Eventsmain";

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Events />

    </div>
  );
};

export default App;
