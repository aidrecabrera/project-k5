import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
export class NavigationBar extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="flex p-12 gap-24 font-grotesk font-light tracking-widest absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">HOME</Link>
            <Link to="/css/">PROGRESS</Link>
            <img src={process.env.PUBLIC_URL + "/K5.png"} alt="K5 Progress" />
            <Link to="/js/">INFORMATION</Link>
            <Link to="/involve/">INVOLVED</Link>
          </nav>
          <Outlet />
        </div>
      </>
    );
  }
}

export default NavigationBar;
