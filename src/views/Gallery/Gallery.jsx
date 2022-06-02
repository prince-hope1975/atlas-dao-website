import React from "react";
import { Grid } from "@mui/material";

import SimpleImageComponent from "./SimpleImageComponent/SimpleImageComponent";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle";

const Gallery = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ParalaxSectionTitle title="The Gallery" />
      <div className="team-info">
        Coming Soon
      </div>
      {/* <>
        {team.map((item, index) => (
          <SimpleImageComponent key={index} data={item} />
        ))}
      </> */}
    </Grid>
  );
};

Gallery.propTypes = {};

export default Gallery;
