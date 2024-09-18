import insta from "/assets/instagram.png";
import faceBook from "/assets/facebook.png";
import linkedin from "/assets/linkedin.png";
import twitter from "/assets/twitter.png";

type Link = {
  id: number;
  name: string;
  href: string;
};

export const navLinks: Link[] = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

type Social = {
  icon: string;
  color?: string;
  link: string;
};

export const socials: Social[] = [
  {
    icon: insta,
    link: "https://www.instagram.com/msxdev01",
  },
  {
    icon: linkedin,
    color: "#0a66c2",
    link: "https://www.linkedin.com/in/msxdev-dev-148881329",
  },
  {
    icon: twitter,
    color: "gray",
    link: "https://x.com/Msx_dev43",
  },
  {
    icon: faceBook,
    color: "#0866ff",
    link: "https://www.facebook.com/people/Manas-Srivastava/pfbid0346K4C6MKpr2EyGuExTJLEBbPWf3dxKi61xe4eYrAq6GHSkB2VEx7RHJHc5hPUA19l/?mibextid=ZbWKwL",
  },
];
