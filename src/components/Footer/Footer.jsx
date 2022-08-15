import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Telegram, Twitter } from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { faDiscord, faMedium } from "@fortawesome/free-brands-svg-icons";

const icons = [
  {
    icon: <Twitter />,
    url: "https://twitter.com/atlasdao_",
  },
  {
    icon: <FontAwesomeIcon icon={faDiscord} />,
    url: "https://discord.com/invite/zJGHEJUfhW",
  },
  {
    icon: <Telegram />,
    url: "https://t.me/Atlasdao",
  },
  {
    icon: <FontAwesomeIcon icon={faMedium} />,
    url: "https://medium.com/@atlasdao_",
  },
];

const Footer = () => {
  return (
    <Grid container justifyContent="center">
      <Grid
        container
        justifyContent="space-between"
        sx={{ width: "80%", marginBottom: "25px" }}
      >
        <Grid item>
          <Typography>Copyright © 2022 // Powered by Akash</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {};

export default Footer;
