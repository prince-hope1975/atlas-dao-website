import React, { useState } from "react";
import {
  Box,
  Divider,
  // Divider,
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

import roadmap2 from "../../images/roadmap_2.svg";
import roadmap3 from "../../images/roadmap_3.svg";
import roadmap4 from "../../images/roadmap_4.svg";
import { RocketLaunch } from "@mui/icons-material";

const images = {
  0: <img src={roadmap2}></img>,
  1: <img src={roadmap3}></img>,
  2: <RocketLaunch sx={{ fontSize: "200px", color: "#3c48cb" }} />,
};

const stepTextContent = {
  0: [
    "Build core team",
    "Establish social media presence",
    "Launch website",
    "Launch Sky Monk NFT on Stargaze and Omniflix",
    "Partner with other Cosmos Chains and NFT Projects",
    "Spin Stargaze validator node",
    "Distribute NFT Mint Raffle",
  ],
  1: [
    "Launch Sky Monk NFT on Cronos X Stash",
    "Spin Juno Validator Node",
    "Hire more Developers",
    "Research and Development",
  ],
  2: [
    "Spin Atom Validator Node",
    "Launch End World Hunger Foundation",
    "More Information coming soon . . .",
  ],
};

const faqList = [
  {
    question: "Why does Atlas DAO need an NFT?",
    answer:
      "The Sky Monk NFT goal is to bring cosmonauts from all over the cosmos to Atlas DAO. Atlas DAO needs a group of dedicated Cosmonauts to help provide Utility and create crypto products for everyday people.",
  },
  {
    question: "What are some of the utilities of the Atlas Sky Monk NFT?",
    answer:
      "NFT holders will receive 25% or more of the Atlas DAO token genesis supply, staking boost, share validating reward, the possibility for NFT holders to sell their NFT back to our platform for the mint price at any time and much more.",
  },
  {
    question: "What is the End World Hunger Foundation?",
    answer:
      "The goal of this foundation is to provide food to impoverished communities around the world. 10% of the capital raised in the Sky Monks NFT mint will go to either start it. We will also provide 10% of the atlas validating reward to the end world hunger foundation.",
  },
  {
    question: "Why should I stake with Atlas DAO Validator when it launches?",
    answer:
      "Possible DAO token and NFT airdrop. Helping Atlas DAO realize the goal of lower rent for everyday people. You will also Contribute to the world end hunger foundation.",
  },
  {
    question: "When is the Mint Date?",
    answer: "Q2 2022, We will have a specific date close to launch.",
  },
  {
    question: "What is the supply? ",
    answer: "4000; Released in 5 waves of 800 each.",
  },
  {
    question: "How much is the Mint? ",
    answer: "TBA.",
  },
  {
    question: "Where will I be able to Mint Atlas DAO NFT?",
    answer: "Stargaze and 4 other tba nft platforms.",
  },
];

const Roadmap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Q2", "Q3", "Q4"];
  const generateStepContent = {
    0: stepTextContent[0].map((text, index) => (
      <Grid item xs={12} md={12} lg={12} key={index}>
        <ListItem>{text}</ListItem>
      </Grid>
    )),
    1: stepTextContent[1].map((text, index) => (
      <Grid item xs={12} md={12} lg={12} key={index}>
        <ListItem>{text}</ListItem>
      </Grid>
    )),
    2: stepTextContent[2].map((text, index) => (
      <Grid item xs={12} md={12} lg={12} key={index}>
        <ListItem>{text}</ListItem>
      </Grid>
    )),
  };

  return (
    <Stack
      sx={{ width: "100%", marginBottom: (theme) => theme.spacing(10) }}
      spacing={4}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: (theme) => theme.spacing(5),
            marginBottom: (theme) => theme.spacing(3),
          }}
        >
          ROADMAP
        </Typography>
      </Box>
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
              <Grid container justifyContent="center" md={4} lg={4}>
                {images[String(activeStep)]}
              </Grid>
            </>
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Divider />
        <img style={{ width: "40px", color: "white" }} src={roadmap4} />,
        <Divider />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: (theme) => theme.spacing(5),
            marginBottom: (theme) => theme.spacing(3),
          }}
        >
          FAQ
        </Typography>
        <Accordion info={faqList} />
      </Box>
    </Stack>
  );
};

Roadmap.propTypes = {};

export default Roadmap;
