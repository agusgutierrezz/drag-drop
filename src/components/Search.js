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
    <div className="search-container">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h4>What do you want to eat?</h4>
        <br />
        <input
          type="text"
          name="username"
          ref={textInput}
          placeholder="noodles"
        />
        <br />

        <button type="submit">Go!</button>
      </form>
      {item && <Response action={handleClick} query={item} />}

      {/* <input class="c-checkbox" type="checkbox" id="checkbox" />
      <div class="c-formContainer">
        <form class="c-form" action="">
          <input class="c-form__input" placeholder="E-mail" type="email" />
          <label class="c-form__buttonLabel" for="checkbox">
            <button class="c-form__button" type="button">
              Send
            </button>
          </label>
          <label
            class="c-form__toggle"
            for="checkbox"
            data-title="Notify me"
          ></label>
        </form>
      </div> */}
    </div>
  );
}

export default Search;
