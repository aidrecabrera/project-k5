import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="flex flex-row px-36 py-10 gap-10">
          <div className="flex flex-col w-3/6">
            <h1 className="article-header">A NEED FOR ACTION</h1>
            <div className="flex flex-col text-4xl  font-light gap-4">
              <p>
                Enter the Paris Agreement, a universal chorus, harmonizing
                nations in the battle against climate change. The Philippines,
                among the esteemed signatories, has pledged its commitment to
                reduce greenhouse gas emissions, enhance resilience, and secure
                a sustainable future.
              </p>
            </div>
          </div>
          <div className="w-3/6">
            <img
              src="https://www.officialgazette.gov.ph/images/uploads/New-York-PM-Paris-Climate-Agreement-1-1.jpg"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}
