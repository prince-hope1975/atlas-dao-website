import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import { Twitter } from "@mui/icons-material";

const SimpleImageComponent = ({ data }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={data.lg - 1}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        // onClick={() => (parent.location = data.url)}
        onClick={() => parent.open(data.url)}
        sx={{
          boxShadow: "0px 0px 40px 20px rgb(107, 246, 246)",
          cursor: "pointer",
          border: "3pt solid rgb(80, 206, 246)",
          borderRadius: "50%",
          background: "black",
          margin: "40px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.5s",
          "&:hover": {
            transform: "scale(1.2)",
          },
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          width: "250px",
          height: "250px",
        }}
      >
        <Box
          sx={{
            transition: "opacity 0.2s",
            opacity: 0,
            "&:hover": {
              background: "rgba(8, 9, 26, 0.95)",
              opacity: "1",
            },
            width: "250px",
            height: "244px",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Twitter
            sx={{
              fontSize: "50px",
              marginBottom: "24px",
            }}
          />
          <Typography sx={{ fontSize: 18 }}>{data.description}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

SimpleImageComponent.propTypes = { data: PropTypes.object };

export default SimpleImageComponent;
