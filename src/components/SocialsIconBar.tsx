import { socials } from "../constants";
import SocialIcon from "./SocialIcon";

const SocialsIconBar = () => {
  return (
    <nav className="flex gap-5">
      {socials.map((social) => (
        <SocialIcon key={social.link} {...social} />
      ))}
    </nav>
  );
};

export default SocialsIconBar;
