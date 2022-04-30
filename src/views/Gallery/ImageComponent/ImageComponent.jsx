import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import { Twitter } from "@mui/icons-material";

const ImageComponent = ({ data }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={data.lg}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          cursor: "pointer",
          border: "3pt solid #3c48cb",
          borderRadius: "50%",
          background: "black",
          margin: "40px 0",
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
              background: "rgba(60, 72, 203, 0.4)",
              opacity: "1",
            },
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            onClick={() => (parent.location = data.url)}
            sx={{
              "&:before": {
                content: '""',
                float: "left",
                width: "50%",
                height: "100%",
                shapeOutside:
                  "polygon(0 0, 98% 0, 50% 6%, 23.4% 17.3%, 6% 32.6%, 0 50%, 6% 65.6%, 23.4% 82.7%, 50% 94%, 98% 100%, 0 100%)",
              },
              "& p": {
                height: "100%",
                width: "100%",
              },
              "& p::before": {
                position: "relative",
                top: "-30px",
                content: '""',
                width: "50%",
                height: "100%",
                float: "right",
                shapeOutside:
                  "polygon(2% 0%, 100% 0%, 100% 100%, 2% 100%, 50% 94%, 76.6% 82.7%, 94% 65.6%, 100% 50%, 94% 32.6%, 76.6% 17.3%, 50% 6%)",
              },
            }}
          >
            <Twitter />
            <p>{data.description}</p>
          </Box>
        </Box>
        {/* <img src={image} style={{ width: "250px" }} /> */}
      </Box>
    </Grid>
  );
};

ImageComponent.propTypes = {
  data: PropTypes.object,
};

export default ImageComponent;
