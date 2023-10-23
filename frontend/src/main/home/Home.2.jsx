import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <div className="flex flex-row px-40 gap-16">
            <div className="w-3/12">
              <h1 className="text-7xl">→</h1>
            </div>
            <div className="flex flex-col w-9/12 gap-10">
              <div>
                <h1 className="text-8xl">THE GREAT CHALLENGE</h1>
              </div>
              <div className="">
                <img
                  src="https://www.universetoday.com/wp-content/uploads/2010/03/sarychev-volcano.jpg"
                  alt=""
                  className="grayscale"
                />
              </div>
              <div className="flex flex-row">
                <h1 className="w-4/12 text-xl">(Why bother?)</h1>
                <p className="w-8/12 text-2xl">
                  Natural disasters have always been a part of our history,
                  etched into the very fabric of our nation. Typhoons,
                  earthquakes, volcanic eruptions, and floods are realities that
                  we have faced for generations. Yet, climate change is
                  rewriting the rules of this ancient story. It is exacerbating
                  the impact of these natural events, making them more frequent
                  and more destructive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
