import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const SideMenu = (props) => {
  const { entries } = props;
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          ".css-1vxvp5a-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "transparent",
            backgroundImage: "none",
          },
        }}
      >
        <List>
          {entries.map((label) => {
            return (
              <ListItem button key={label} onClick={toggleDrawer(false)}>
                <ListItemText primary={label} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

SideMenu.propTypes = {};

export default SideMenu;
