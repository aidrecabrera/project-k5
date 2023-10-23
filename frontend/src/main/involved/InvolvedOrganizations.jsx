import React, { Component } from "react";

export class InvolvedOrganizations extends Component {
  render() {
    const { name, website, description } = this.props; // Access the props here

    return (
      <div className=" border border-white w-1/4">
        <div className="flex flex-col organization bg-base-100 p-10 gap-5">
          <h1 className="font-black text-left text-2xl">
            <a href={website} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h1>
          <p className="text-left">{description}</p>
        </div>
      </div>
    );
  }
}

export default InvolvedOrganizations;
