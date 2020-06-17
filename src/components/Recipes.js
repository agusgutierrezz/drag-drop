import React, { useState } from "react";
import Search from "./Search";

function Recipes(props) {
  const [items, setItems] = useState(props.items);
  const [healthy, setHealthy] = useState([]);
  //   const handleBack = (e) => {
  //     e.preventDefault();
  //     setActive(false);
  //   };
  const getHealthy = () => {
    let array = [];
    let sorted = items.map((elem, index) => {
      let total = elem.recipe.digest[0].total;
      array.push([total, index]);
    });
    var sortedArray = array.sort(function (a, b) {
      return a[0] - b[0];
    });
    return items[sortedArray[0][1]];
  };
  const getConfort = () => {
    let array = [];
    let sorted = items.map((elem, index) => {
      let total = elem.recipe.digest[0].total;
      array.push([total, index]);
    });
    var sortedArray = array.sort(function (a, b) {
      return b[0] - a[0];
    });
    return items[sortedArray[0][1]];
  };
  return (
    <div>
      {/* <button onClick={props.handleClick}>Go back</button> */}
      <h1>Receta sana {getHealthy().recipe.label}</h1>
      <h1>Receta sana {getHealthy().recipe.digest[0].total}</h1>
      <h1>Receta confort {getConfort().recipe.label}</h1>
      <h1>Receta confort {getConfort().recipe.digest[0].total}</h1>

      {props.items.map((elem, index) => {
        return (
          <div key={index}>
            <h1>{elem.recipe.label}</h1>
            {/* <p>{elem.recipe.totalNutrients}</p> */}
            <img src={elem.recipe.image} alt="photo" />

            <p>{Math.round(elem.recipe.digest[0].total)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Recipes;
