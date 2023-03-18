import "./footer.css";
import Socials from "../../../Molecules/SocialLinks/Socials";
import LogoFooter from "../../../Atoms/Pictures/LogoFooter";

export default function Footer() {
  return (
      <div className="footerContainer">
        <LogoFooter />
        <Socials />
      </div>
  );
}