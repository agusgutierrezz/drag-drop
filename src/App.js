import React, { useState } from "react";
import "./App.scss";
import Search from "./components/Search.js";

function App(props) {
  return (
    <div className="app-body">
      <Search />
    </div>
  );
}

export default App;
