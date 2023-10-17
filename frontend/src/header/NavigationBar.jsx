import React, { Component } from "react";

export class NavigationBar extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="flex gap-24 p-14 ml-16 font-grotesk font-light tracking-widest">
            <a href="/html/">HOME</a>
            <a href="/css/">OUR PROGRESS</a>
            <img src={process.env.PUBLIC_URL + "/K5.png"} alt="K5 Progress" />
            <a href="/js/">INFORMATION</a>
            <a href="/python/">GET INVOLVED</a>
          </nav>
        </div>
      </>
    );
  }
}

export default NavigationBar;
