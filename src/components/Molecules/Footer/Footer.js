import "./footer.css";
import Socials from "../SocialLinks/Socials";
import LogoFooter from "../../Atoms/Pictures/Logo/LogoFooter";

export default function Footer() {
  return (
      <div className="footerContainer">
        <LogoFooter />
        <Socials />
      </div>
  );
}