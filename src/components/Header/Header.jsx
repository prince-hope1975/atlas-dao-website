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
import { BlurCircular } from "@mui/icons-material";
import MenuEntry from "./MenuEntry";
import SideMenu from "./SideMenu";

const Header = ({ window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuEntries = [
    { label: "Home", url: "/" },
    { label: "Roadmap", url: "/roadmap" },
    { label: "Atlas DAO", url: "/dao" },
    { label: "EWH Foundation", url: "/fundation" },
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
            <BlurCircular />
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
