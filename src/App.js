import React, { Component } from "react";
import logo from "./logo.svg";
import Item from "./Item.js";
import "./App.css";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "item 1",
      },
      {
        id: 2,
        name: "item 2",
      },
      {
        id: 3,
        name: "item 3",
      },
      {
        id: 4,
        name: "item 4",
      },
      {
        id: 5,
        name: "item 5",
      },
    ],
  };
  render() {
    return (
      <div className="App-Intro">
        <div className="app-container">
          <div className="intro-container">
            {this.state.items.map((elem, index) => {
              <div key={elem.id}>
                <Item key={elem.id} item={elem.name} />
              </div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
