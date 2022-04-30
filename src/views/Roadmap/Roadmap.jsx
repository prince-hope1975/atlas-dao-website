import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ColorStepIcon from "./ColorStepIcon/ColorStepIcon";
import ColorConnector from "./ColorConnector/ColorConnector";
import ListItem from "./ListItem/ListItem";
import Accordion from "../../components/Accordion/Accordion";

import roadmap2 from "../../images/roadmap/roadmap_2.svg";
import roadmap3 from "../../images/roadmap/roadmap_3.svg";
import roadmap4 from "../../images/roadmap/roadmap_4.svg";
import { RocketLaunch } from "@mui/icons-material";

import { stepTextContent, faqList } from "./info";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Divider from "../../components/Divider/Divider";

const images = {
  0: <img src={roadmap2}></img>,
  1: <img src={roadmap3}></img>,
  2: <RocketLaunch sx={{ fontSize: "200px", color: "#3c48cb" }} />,
};

const Roadmap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Q2", "Q3", "Q4"];
  const generateStepContent = {
    0: stepTextContent[0].map((text, index) => (
      <ListItem key={index}>{text}</ListItem>
    )),
    1: stepTextContent[1].map((text, index) => (
      <ListItem key={index}>{text}</ListItem>
    )),
    2: stepTextContent[2].map((text, index) => (
      <ListItem key={index}>{text}</ListItem>
    )),
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <SectionTitle>roadmap</SectionTitle>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorStepIcon}
              onClick={() => setActiveStep(index)}
            >
              <Typography sx={{ fontWeight: "bold" }}>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            width: isMobile ? "100%" : "70%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isTablet ? (
            <Grid item md={12} lg={12}>
              {generateStepContent[activeStep]}
            </Grid>
          ) : (
            <>
              <Grid item md={8} lg={8}>
                {generateStepContent[activeStep]}
              </Grid>
              <Grid
                item
                md={4}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {images[String(activeStep)]}
              </Grid>
            </>
          )}
        </Grid>
      </Box>
      <Divider>
        <img style={{ width: "40px" }} src={roadmap4} />
      </Divider>
      <SectionTitle>faq</SectionTitle>
      <Accordion info={faqList} />
    </Stack>
  );
};

Roadmap.propTypes = {};

export default Roadmap;
