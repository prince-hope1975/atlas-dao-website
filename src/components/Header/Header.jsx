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

const Header = ({ window }) => {

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

    <AppBar
      // enableColorOnDark
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
      }}

      position="fixed"

    >
      <CssBaseline />
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <img src={logo} style={{ width: "5vw" }} />
        </div>
        <div style={{display: "flex", margin: "30px 10px"}}>
          {isMobile ? (
            <SideMenu entries={menuEntries} />
          ) : ( 
            <>
              {menuEntries.map((entry) => {
                return <MenuEntry entry={entry} key={entry.label} />;
              })}
            </>
          )}
          {isMobile ? <></> : (
            <Networks/>
          )}
        </div>
      </Toolbar>
    </AppBar>

  );
};

Header.propTypes = {
  window: PropTypes.any,
};

export default Header;
