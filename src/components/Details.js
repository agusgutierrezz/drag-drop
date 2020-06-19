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
  const getPerc = (health, conf) => {
    let total = (health * 100) / conf;
    return Math.round(100 - total);
  };
  let confort = getConfort(items).recipe;
  let healthy = getHealthy(items).recipe;
  console.log(healthy);
  let percentage = getPerc(healthy.digest[0].total, confort.digest[0].total);
  const divStyle = {
    backgroundImage: "url(" + healthy.image + ")",
  };
  const divStyle1 = {
    backgroundImage: "url(" + confort.image + ")",
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <div class="social">
            <h6>
              This recipe contains
              <span> {percentage}%</span> less trans and saturated fats
            </h6>
          </div>
          <h2>{healthy.label}</h2>

          <p>HEALTHY</p>
          <div className="pic" style={divStyle}>
            {/* <img src={healthy.image} alt="photo" /> */}
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <button>
            <a href={healthy.url}>GO</a>
          </button>
        </div>
        <div className="card card2">
          <h2>{confort.label}</h2>

          <p>CONFORT</p>
          <div className="pic" style={divStyle1}>
            {/* <img src={confort.image} alt="photo" /> */}
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <button>
            {" "}
            <a href={confort.url}>GO</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
