import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { CloseRounded, Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ entries }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ display: open ? "none" : "inline" }} />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          background:"none"
        }}
      >
        <List
          sx={{
            width: "90vw",
            bgcolor:"none"
          }}
        >
          <ListItem sx={{ justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRounded />
            </IconButton>
          </ListItem>
          {entries.map((entry) => {
            return (
              <ListItem
                button
                key={entry.label}
                onClick={() => {
                  toggleDrawer(false);
                  setOpen(false);
                  navigate(entry.url);
                }}
              >
                <ListItemText primary={entry.label} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

SideMenu.propTypes = {
  entries: PropTypes.array,
};

export default SideMenu;
