import React, { Component } from "react";
import Hero from "./Home.1";
import Problem from "./Home.2";
import Impact from "./Home.3";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col overflow-hidden gap-32">
          <Hero />
          <Problem />
          <Impact />
        </div>
      </>
    );
  }
}
