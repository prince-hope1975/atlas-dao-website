import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuEntry from "./MenuEntry";
import SideMenu from "./SideMenu";
import logo from "../../images/logo.png";
import Networks from "../Networks/Networks";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import TemporaryDrawer from "./Drawer.tsx";

const Header = ({ window }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuEntries = [
    { label: "Home", url: "/" },
    // { label: "Roadmap", url: "/roadmap" },
    { label: "Sky Monks", url: "/sky-monks" },
    { label: "Validator", url: "/validator" },
    { label: "Gallery", url: "/gallery" },
    // { label: "Validators", url: "/validators" },
  ];

  return (
    <motion.div
      layout
      // enableColorOnDark
      style={{
        backgroundColor: "hsla(227, 82%, 11%, .4)",
        backdropFilter: "blur(20px)",
        zIndex: 10,
        border: "none",
        boxShadow: "none",
        position: "fixed",
        top: "0",
        width: "100vw",
        fontSize: "clamp(.5rem, 3vw, 1rem)",
      }}
    >
      <CssBaseline />
      <Toolbar>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexBasis: 1,
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} style={{ width: "max(5vw , 2.5rem)", cursor:"pointer" }} />
        </div>
        <div
          style={{
            display: "flex",
            margin: "30px 10px",
            flexBasis: 1,
            gap: "2rem",
            marginRight: !isMobile?"5rem":"",
            fontSize: "clamp(.5rem, 3vw, 1rem)",
          }}
        >
          {isMobile ? (
            <SideMenu entries={menuEntries} />
          ) : (
            <>
              {menuEntries.map((entry) => {
                return <MenuEntry entry={entry} key={entry.label} />;
              })}
            </>
          )}
          {isMobile ? <></> : <Networks />}
        </div>
      </Toolbar>
    </motion.div>
  );
};

Header.propTypes = {
  window: PropTypes.any,
};

export default Header;
