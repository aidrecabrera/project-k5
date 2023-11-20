import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-row justify-center">
          <h1 className="w-3/4 text-6xl font-extralight text-center px-36 py-10 border -z-10 mb-48">
            “The climate emergency is a race we are losing, but it is a race we
            can win.”
          </h1>
        </div>
        <div className="relative bg-white ">
          <div className="absolute -top-24 left-2/4 px-36">
            <img
              src="https://serp-p.pids.gov.ph/media/featured-image/1666684927_635797ff9bc29.jpg"
              alt=""
              className="h-[50vh]"
            />
          </div>
        </div>
      </>
    );
  }
}
