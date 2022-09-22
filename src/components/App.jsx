import React from "react";
// import PropTypes from "prop-types";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "../sass/app.scss";
import Home from "../views/Home/Home";
import Collections from "../views/collections/collections";
// import Roadmap from "../views/Roadmap/Roadmap";
import Gallery from "../views/Gallery/Gallery";
import Validator from "../views/Validator/Validator";
import Container from "../layout/BaseLayout/container";

const App = () => {
  // const location = useLocation()
  return (
    <AnimatePresence
      mode="wait"
      // initial={false}
      presenceAffectsLayout
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/validator" element={<Validator />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Container>Page not found</Container>} />
          </Route>
        </Routes>
      </HashRouter>
    </AnimatePresence>
  );
};

App.propTypes = {};

export default App;
