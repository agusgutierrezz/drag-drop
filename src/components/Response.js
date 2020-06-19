import React, { Component } from "react";
import Recipes from "./Recipes";
import gif from "../gif.gif";
import Search from "./Search";
class Response extends Component {
  state = {
    items: [],
    isLoaded: false,
    active: false,
    query: this.props.query,
  };
  componentDidMount() {
    fetch(
      `https://api.edamam.com/search?q=${this.state.query}&app_id=cff280d4&app_key=226923e5aa91136747a00f1610faf59d&from=0&to=10&calories=591-722&health=alcohol-free`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.hits,
          isLoaded: true,
          active: true,
        });
      });
  }
  handleClick() {}
  render() {
    return (
      <div>
        <button id="goBack" onClick={this.props.action}>
          Go back!
        </button>
        {!this.state.isLoaded && <img src={gif} alt="gif" />}
        {this.state.active && <Recipes items={this.state.items} />}
      </div>
    );
  }
}

export default Response;
