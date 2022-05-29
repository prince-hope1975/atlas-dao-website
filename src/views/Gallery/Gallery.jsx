import React from "react";
import { Grid } from "@mui/material";

import founder from "../../images/team/founder.png";
import foundingMember from "../../images/team/founding_member.png";
import artist from "../../images/team/artist.png";
import foundingMember2 from "../../images/team/founding_member_2.png";
import creativeDirector from "../../images/team/creative_director.png";
import SimpleImageComponent from "./SimpleImageComponent/SimpleImageComponent";
import ParalaxSectionTitle from "../../components/SectionTitle/ParalaxSectionTitle";

const team = [
  {
    image: founder,
    description: "Founder",
    url: "https://twitter.com/jacobremy0",
    lg: 4,
  },
  {
    image: foundingMember,
    description: "Founding Member",
    url: "https://twitter.com/erikchain_io",
    lg: 4,
  },
  {
    image: artist,
    description: "Artist",
    url: "https://twitter.com/rendrasc",
    lg: 4,
  },
  {
    image: foundingMember2,
    description: "Founding Member",
    url: "https://twitter.com/sir_arndt",
    lg: 6,
  },
  {
    image: creativeDirector,
    description: "Creative director",
    url: "https://twitter.com/chellyysavv",
    lg: 6,
  },
];

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
