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

const Header = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuEntries = [
    "Home",
    "Validators",
    "Atlas DAO",
    "World End Hunger Foundation",
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
              {menuEntries.map((label) => {
                return <MenuEntry text={label} key={label} />;
              })}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

Header.propTypes = {};

export default Header;
