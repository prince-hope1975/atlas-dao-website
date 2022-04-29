import React from "react";
import PropTypes from "prop-types";
import {
  Accordion as MUIAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

const Accordion = ({ info }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return info.map((element, index) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
      <MUIAccordion
        sx={{
          width: "70%",
          backgroundColor: "transparent",
        }}
        key={index}
        expanded={expanded === `panel + ${index}`}
        onChange={handleChange(`panel + ${index}`)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontSize: (theme) =>
                isMobile
                  ? theme.typography.pxToRem(14)
                  : theme.typography.pxToRem(25),
            }}
          >
            {element.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: (theme) =>
                isMobile
                  ? theme.typography.pxToRem(14)
                  : theme.typography.pxToRem(25),
            }}
          >
            {element.answer}
          </Typography>
        </AccordionDetails>
      </MUIAccordion>
    );
  });
};

Accordion.propTypes = {
  info: PropTypes.array,
};

export default Accordion;
