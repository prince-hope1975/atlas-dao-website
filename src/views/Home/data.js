import { EmojiEvents, LocalActivity, Paid, Policy } from "@mui/icons-material";
import atlas1 from "../../images/parallax/atlas1.png";
import atlas2 from "../../images/parallax/atlas2.png";
import atlas3 from "../../images/parallax/atlas3.png";
import atlas4 from "../../images/parallax/atlas4.png";

export const dataCards = [
  {
    title: "Sky Monk Gives Back",
    content:
      "10% of the NFT proceeds will go to start a Non-profit organisation that provides food and water to impoverished communities around the world.",
    image: atlas1,
  },
  {
    title: "We value Our Community",
    content:
      "All the funds raised will be HELD in a multisig wallet with different well known trustworthy cosmonauts.",
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
      "Sky Monk holders will play an integral role in the project. They will Participate in governance and early access to products release.",
    image: atlas4,
  },
];

export const perks = [
  {
    title: "Commercial Rights",
    icon: Policy,
    translateX: "-250px",
    translateY: "300px",
  },
  {
    title: "Cosmoverse Ticket Raffles",
    icon: LocalActivity,
    translateX: "250px",
    translateY: "80px",
  },
  {
    title: "Validator Rewards",
    icon: EmojiEvents,
    translateX: "-250px",
    translateY: "150px",
  },
  {
    title: "Atlas DAO Token Airdrop",
    icon: Paid,
    translateX: "250px",
    translateY: "-140px",
  },
];
