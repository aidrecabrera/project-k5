import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <h1 className="text-center">PHILIPPINES IS NOT IMMUNE</h1>
          <img src="./public/earth.png" alt="" />
          <p className="text-center">
            Natural disasters have always been with us. But climate change
            exacerbates their impact, making the worst events occur more
            frequently.
          </p>
        </div>
      </div>
    );
  }
}
