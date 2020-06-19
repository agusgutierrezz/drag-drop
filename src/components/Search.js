import React, { useState, useRef } from "react";
import Response from "./Response.js";
import Landing from "./Landing.js";

function Search(props) {
  const [item, setItem] = useState("");
  const [active, setActive] = useState(true);

  const textInput = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    setItem(event.target.username.value);
    setActive(false);
  };
  const handleClick = () => {
    setItem("");
    setActive(true);
  };

  return (
    <>
      {active && <Landing />}
      {item && <Response action={handleClick} query={item} />}
      {active && (
        <div className="search-container">
          <input className="c-checkbox" type="checkbox" id="checkbox" />
          <div className="c-formContainer">
            <form
              className="c-form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                className="c-form__input"
                placeholder="ingredient"
                type="text"
                name="username"
              />
              <label className="c-form__buttonLabel" htmlFor="checkbox">
                <button className="c-form__button" type="submit">
                  Go!
                </button>
              </label>
              <label
                class="c-form__toggle"
                htmlFor="checkbox"
                data-title="Try me!"
              ></label>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
