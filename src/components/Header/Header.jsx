import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { BlurCircular, Widgets } from "@mui/icons-material";
import MenuEntry from "./MenuEntry";
import SideMenu from "./SideMenu";
import logo from "../../images/logo.png";

const Header = ({ window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuEntries = [
    { label: "Home", url: "/" },
    { label: "Roadmap", url: "/roadmap" },
    { label: "Sky Monks", url: "/sky-monks" },
    { label: "Validator", url: "/validator" },
    { label: "Gallery", url: "/gallery" },
    // { label: "Validators", url: "/validators" },
  ];

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        // enableColorOnDark
        sx={{
          backgroundColor: "transparent",
          backgroundImage: "none",
        }}
      >
        <CssBaseline />
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <img src={logo} style={{width:"5vw"}}/>
          </div>
          {isMobile ? (
            <SideMenu entries={menuEntries} />
          ) : (
            <>
              {menuEntries.map((entry) => {
                return <MenuEntry entry={entry} key={entry.label} />;
              })}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

Header.propTypes = {
  window: PropTypes.any,
};

export default Header;
