import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./header/NavigationBar";
import Home from "./main/home/Home";
import Involve from "./main/involved/InvolvedPage";
import Progress from "./main/progress/Progress";

function App() {
  return (
    <>
      <body>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
              <Route index element={<Home />} />
              <Route path="involve" element={<Involve />} />
              <Route path="progress" element={<Progress />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </body>
    </>
  );
}
export default App;
