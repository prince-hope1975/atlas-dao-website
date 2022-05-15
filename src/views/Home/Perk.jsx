import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PaidIcon from '@mui/icons-material/Paid';
import Trophy from './perks/Trophy.jsx';
import Shield from './perks/Shield.jsx';
import Ticket from './perks/Ticket.jsx';
import Money from './perks/Money.jsx';

const Perk = (props) => {

  return  <div className="perks">
            <Trophy/>;
            <Ticket/>;
            <Shield/>;
            <Money/>;
          </div>
};


export default Perk;
