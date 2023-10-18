import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home pt-20 flex items-center justify-center">
          <div className="flex flex-col gap-10">
            <h1 className="text-center font-grotesk text-8xl font-bold font-light ">
              PHILIPPINES IS NOT IMMUNE
            </h1>
            <img
              src={process.env.PUBLIC_URL + "/earth.png"}
              alt=""
              className="earth w-fit mx-auto"
            />
            <p className="text-center font-grotesk font-light ">
              Natural disasters have always been with us. But climate change
              exacerbates their impact, making the worst events occur more
              frequently.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
