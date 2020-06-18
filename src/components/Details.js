import React, { useState } from "react";

const Details = (props) => {
  let [items, setItems] = useState(props.data);
  const getHealthy = (param) => {
    let array = [];
    param.map((elem, index) => {
      let fat = elem.recipe.digest[0].total;
      let sugar = elem.recipe.totalNutrients["SUGAR"].quantity;
      array.push([[fat + sugar], index]);
    });
    var sortedArray = array.sort(function (a, b) {
      return a[0] - b[0];
    });

    return param[sortedArray[0][1]];
  };
  const getConfort = (param) => {
    let array = [];
    param.map((elem, index) => {
      let total = elem.recipe.digest[0].total;
      array.push([total, index]);
    });
    var sortedArray = array.sort(function (a, b) {
      return b[0] - a[0];
    });
    return param[sortedArray[0][1]];
  };
  let confort = getConfort(items).recipe;
  let healthy = getHealthy(items).recipe;
  return (
    <div>
      <div>
        <h1>Receta sana {healthy.label}</h1>
        <h1>Receta sana {healthy.digest[0].total}</h1>
        <img src={healthy.image} alt="photo" />
        <h1>Receta confort {confort.label}</h1>
        <h1>Receta confort {confort.digest[0].total}</h1>
        <img src={confort.image} alt="photo" />
      </div>
    </div>
  );
};

export default Details;
