import React from "react";
import PropTypes from "prop-types";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import { Route, Routes } from "react-router-dom";
import About from "../views/About/About";

import "../sass/app.scss";
import Home from "../views/Home/Home";

const App = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

App.propTypes = {};

export default App;
