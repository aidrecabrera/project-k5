import React, { Component } from "react";
import Hero from "./Home.1";
import Problem from "./Home.2";
import Impact from "./Home.3";
import K5 from "./Home.4";
import Pledge from "./Home.5";
import Delivery from "./Home.6";
import Quote from "./Home.Quote";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col overflow-hidden ">
          <Hero />
          <Problem />
          <Quote />
          <Impact />
          <Pledge />
          <K5 />
          <Delivery />
        </div>
      </>
    );
  }
}
