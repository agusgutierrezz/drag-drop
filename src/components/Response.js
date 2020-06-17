import React, { Component } from "react";

class Response extends Component {
  state = {
    items: [],
    isLoaded: false,
  };
  componentDidMount() {
    console.log("props", this.props.query);
    console.log("props hola ");
    fetch(
      `https://api.edamam.com/search?q=${this.props.query}&app_id=cff280d4&app_key=226923e5aa91136747a00f1610faf59d&from=0&to=10&calories=591-722&health=alcohol-free`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json.hits);
        this.setState({
          items: json.hits,
          isLoaded: true,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.items.map((elem, index) => {
          return (
            <div key={index}>
              <h1>{elem.recipe.label}</h1>
              <img src={elem.recipe.image} alt="photo" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Response;
