import React, { useState } from "react";
import Response from "./Response.js";

function Search(props) {
  const [item, setItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setItem(event.target.username.value);
    // setTimeout(
    //   function () {
    //     setItem("");
    //   }.bind(this),
    //   3000
    // );
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Name:
          <input type="text" name="username" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{item}</p>
      {item && <Response query={item} />}
    </div>
  );
}

export default Search;
