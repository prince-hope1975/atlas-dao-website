import { EmojiEvents, LocalActivity, Paid, Policy } from "@mui/icons-material";
import atlas1 from "../../images/parallax/atlas1.jpg";
import atlas2 from "../../images/parallax/atlas2.jpg";
import atlas3 from "../../images/parallax/atlas3.jpg";
import atlas4 from "../../images/parallax/atlas4.jpg";

export const dataCards = [
  {
    title: "Sky Monk Gives Back",
    content:
      "We will contribute into providing food and water to impoverished communities.",
    image: atlas1,
  },
  {
    title: "We value Our Community",
    content:
      "Funds raised will be held in a multisig wallet.",
    image: atlas2,
  },
  {
    title: "No Whitelist",
    content: "We don't believe whitelists will bring value to our community.",
    image: atlas3,
  },
  {
    title: "Sky Monk NFT Holder Help",
    content:
      "Sky Monk holders  will Participate in governance and early access to products release.",
    image: atlas4,
  },
];

export const perks = [
  {
    title: "Commercial Rights",
    icon: Policy,
    translateX: -250,
    translateY: 300,
  },
  {
    title: "Cosmoverse Ticket Raffles",
    icon: LocalActivity,
    translateX: 250,
    translateY: 80,
  },
  {
    title: "Validator Nodes Discount",
    icon: EmojiEvents,
    translateX: -250,
    translateY: 150,
  },
  {
    title: "Atlas DAO Token Airdrop",
    icon: Paid,
    translateX: 250,
    translateY: -140,
  },
];
