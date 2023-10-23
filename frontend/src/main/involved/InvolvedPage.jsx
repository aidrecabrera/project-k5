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
        <div className="flex flex-row">
          <div className="flex w-1/4 flex-grow-1 align-middle items-center justify-center">
            <h1>GET INVOLVED</h1>
          </div>
          <div className="w-3/4 justify-center items-center text-center">
            <div className="flex flex-wrap">
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
