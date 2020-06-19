import React, { useState } from "react";

function Landing(props) {
  return (
    <div className="landing-container">
      <div className="photo-container"></div>
      <div className="text-container">
        <div>
          <h1>What’s for dinner tonight?</h1>
          <p>
            Tell us the main ingredient, we’ll show you two options: a healthy
            recipe and a confort one.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
