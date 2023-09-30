import React, { Component } from "react";
const axios = require("axios");

axios
  .get("http://127.0.0.1:7000/api/ph/population?format=json", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
export class linechart extends Component {
  render() {
    return <div>linechart</div>;
  }
}

export default linechart;
