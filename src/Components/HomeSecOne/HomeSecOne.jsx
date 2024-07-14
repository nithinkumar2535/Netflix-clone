import React from "react";
import "./HomeSecOne.css";

function HomeSecOne() {
  return (
    <div className="section1 mt-2">
      <div className="row">
        <div className="col-lg-6 col-12 text-col align-items-lg-start">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch smart on TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more
          </p>
        </div>
        <div className="col-lg-6 col-12 img-col">
          <img className="img-fluid" src="/section1.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default HomeSecOne;
