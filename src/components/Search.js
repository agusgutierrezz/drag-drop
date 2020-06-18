import React, { useState, useRef } from "react";
import Response from "./Response.js";
import styled from "styled-components";

function Search(props) {
  const [item, setItem] = useState("");
  const textInput = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    setItem(event.target.username.value);
    event.target.username.value = null;
    console.log(event);
  };
  const handleClick = () => {
    setItem("");
  };
  console.log(textInput.current);
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Name:
          <input type="text" name="username" ref={textInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {item && <Response action={handleClick} query={item} />}
    </div>
  );
}

export default Search;
