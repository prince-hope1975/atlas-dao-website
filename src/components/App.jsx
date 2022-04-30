import React from "react";
// import PropTypes from "prop-types";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import { HashRouter, Route, Routes } from "react-router-dom";

import "../sass/app.scss";
import Home from "../views/Home/Home";
import Roadmap from "../views/Roadmap/Roadmap";
import Gallery from "../views/Gallery/Gallery";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="*" element={<div>hola</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

App.propTypes = {};

export default App;
