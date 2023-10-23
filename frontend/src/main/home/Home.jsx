import React, { Component } from "react";
import Hero from "./Home.1";
import Problem from "./Home.2";

export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <Hero />
        </div>
        <div>
          <Problem />
        </div>
      </>
    );
  }
}
