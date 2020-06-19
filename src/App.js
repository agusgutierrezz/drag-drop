import React, { useState } from "react";
import "./App.scss";
import Search from "./components/Search.js";
import Landing from "./components/Landing.js";

function App(props) {
  return (
    <div>
      <Landing />
      <Search />
    </div>
  );
}

export default App;
