import {
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaWifi,
  FaTv,
} from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { CgGym } from "react-icons/cg";

export const cities = [
  "Oslo",
  "Bergen",
  "Trondheim",
  "Stavanger",
  "Kristiansand",
];

export const facilitiesNames = ["tv", "kitchen", "internet", "gym"];
export const facilitiesIcons = {
  internet: <FaWifi />,
  gym: <CgGym />,
  tv: <FaTv />,
  kitchen: <GiKnifeFork />,
};

export const headerLinks = [
  { name: "Hotels", path: "/hotels" },
  { name: "News", path: "/news" },
  { name: "Reviews", path: "/reviews" },
  { name: "About us", path: "/about" },
];

export const roomTypes = [
  "Single",
  "Double",
  "Triple",
  "Quad",
  "Double-double",
  "Twin",
  "Studio",
  "Queen",
  "King",
  "President",
];

export const footerLinks = [
  { name: "For tourists", route: "/tourists" },
  { name: "For agencies", route: "/agencies" },
  { name: "About us", route: "/about" },
  { name: "Stocks", route: "/stocks" },
];

export const footerContacts = ["+78005553535", "+1234567890", "fram@help.com"];

export const footerPolicies = [
  { title: "Privacy policy", url: "#" },
  { title: "Cookie policy", url: "#" },
  { title: "Terms of use", url: "#" },
];

export const footerSocials = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/" },
  { icon: <FaTwitter />, url: "https://twitter.com/" },
  { icon: <FaFacebookSquare />, url: "https://www.facebook.com/" },
];

export const hotelsOnPage = 9;
