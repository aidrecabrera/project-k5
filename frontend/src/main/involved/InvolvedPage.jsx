import axios from "axios";
import React, { Component } from "react";
import InvolvedOrganizations from "./InvolvedOrganizations";
export default class InvolvedPage extends Component {
  constructor() {
    super();
    this.state = {
      organizationsData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/ph/organization?format=json")
      .then((response) => {
        this.setState({
          organizationsData: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    return (
      <>
        <div className="flex flex-col pt-20">
          <div>
            <div>
              <p className="flex w-screen text-7xl font-thin tracking-tight px-60">
                Want to get involved? Here is a list of organizations you can
                join or support in your mission to protect our planet →
              </p>
            </div>
            <div className="flex flex-row py-14 gap-5 flex-wrap justify-center text-center w-screen">
              {this.state.organizationsData.map((org, index) => (
                <InvolvedOrganizations
                  key={index}
                  name={org.name}
                  website={org.website}
                  description={org.description}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
