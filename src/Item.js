import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Preview extends Component {
  render() {
    return <div className="App-Intro">{this.props.item.name}</div>;
  }
}
export default Preview;
