import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
export class NavigationBar extends Component {
  render() {
    return (
      <>
        <div className="border-b-white">
          <nav className="h-[10vh] flex p-10 gap-24 font-light tracking-widest justify-center border-b border-b-white">
            <Link to="/">HOME</Link>
            <Link to="/progress/">PROGRESS</Link>
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
