import React from "react";
import NavigationBar from "./header/NavigationBar";
import Home from "./main/home/Home";
function App() {
  return (
    <>
      <nav className="navigation">
        <NavigationBar />
      </nav>
      <body>
        <Home />
      </body>
    </>
  );
}
export default App;
