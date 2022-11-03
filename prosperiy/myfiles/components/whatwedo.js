import React from "react";

function whatwedo() {
  return (
    <div>
      <div className="aboutHeading">
        <h2>
          What <span className="format">We Do</span>
        </h2>
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
        </div>

        <div className="box red">
          <h2>Team Builder</h2>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
        </div>

        <div className="box box-down blue">
          <h2>Calculator</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Karma</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
        </div>
      </div>
    </div>
  );
}

export default whatwedo;
