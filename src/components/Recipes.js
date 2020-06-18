import React, { useState } from "react";
import Details from "./Details";
import Error from "./Error";

function Recipes(props) {
  const [items, setItems] = useState(props.items);

  return (
    <div>
      {items.length < 1 && <Error />}
      {items.length && <Details data={items} />}
    </div>
  );
}

export default Recipes;
