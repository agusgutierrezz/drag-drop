import React, { Component } from "react";
import Recipes from "./Recipes";

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

  // handleClick(event) {
  //   this.setState({ query: "" });
  //   event.preventDefault();
  // }
  render() {
    return (
      <div>
        {!this.state.isLoaded && <h1>Loading...</h1>}
        {this.state.active && (
          <Recipes
            items={this.state.items}
            // handleClick={this.handleClick.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default Response;
