import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col justify-between gap-10 leading-none font-grotesk font-light px-32 py-20 h-[90vh] ">
          <h1 className="text-[12rem] leading-0 font-shoulders font-black">
            PHILIPPINES IS
            <span className="duration-500 hover:text-red-600 ">
              {" "}
              NOT IMMUNE
            </span>{" "}
            TO THE CLIMATE CRISIS.
          </h1>
          <p className="text-2xl w-2/5">
            Natural disasters have always been with us. However, climate change
            exacerbates their impact, making the worst events occur more
            frequently.
          </p>
        </div>
      </>
    );
  }
}
