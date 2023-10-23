import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div>
          <div className="flex flex-row h-screen p-40 gap-16">
            <div className="w-3/12">
              <h1 className="text-7xl">→</h1>
            </div>
            <div className="flex flex-col w-9/12 gap-40">
              <div>
                <h1 className="text-8xl">Understanding the great challenge.</h1>
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
