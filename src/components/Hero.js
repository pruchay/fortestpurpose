import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center my-2">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead mb-2">
        Take participation in our new survey: <a href='https://survey-stage.pg.com/3925/60575'>click this link.</a>
    </p>
      <div className='w-[1200px]'>
          <pg-embedded-survey
              channel-id="3925"
              country-code="gr"
              survey-id="60990"
              className="flex h-full flex-1"
              width="1200px"
              height="780px"
          >
          </pg-embedded-survey>
      </div>
  </div>
);

export default Hero;
