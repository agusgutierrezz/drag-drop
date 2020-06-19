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
    <div className="details-container">
      <div className="recipes">
        <div className="healthy">
          <h3>{healthy.label}</h3>
          <img src={healthy.image} alt="photo" />
        </div>
        {/* <h3>Receta sana {healthy.digest[0].total}</h3> */}
        <div className="confort">
          <h3>{confort.label}</h3>
          {/* <h3>Receta confort {confort.digest[0].total}</h3> */}
          <img src={confort.image} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Details;
