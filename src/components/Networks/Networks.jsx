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
];

const Networks = () => {
  return (
    <Grid container>
      <Grid
        container
        sx={{ marginBottom: "25px" }}
      >
        <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
          {icons.map((item, index) => (
            <div key={index} style={{ margin: "0 10px", height: "5px" }}>
              <Link
                color="inherit"
                href={item.url}
                target="_blank"
                rel="noopener"
              >
                {item.icon}
              </Link>
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

Networks.propTypes = {};

export default Networks;
