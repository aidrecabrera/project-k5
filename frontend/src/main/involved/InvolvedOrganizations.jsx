import React, { Component } from "react";

export class InvolvedOrganizations extends Component {
  render() {
    const { name, website, description } = this.props; // Access the props here

    return (
      <div className="flex gap-10 m-5 p-5 border border-white rounded-xl">
        <div className="organization text-center bg-base-100 p-5">
          <h1 className="font-black text-5xl text-left">
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
