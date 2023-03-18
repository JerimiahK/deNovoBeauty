import "./Header.css"
import Logo from "../../../Atoms/Pictures/Logo";
import HomeBookButton from "../../../Atoms/Buttons/HeaderButton/HomeBookButton";
import HeroImage from "../../../Atoms/Pictures/heroImage";

export default function HomeHeader() {
  return (
      <section className="heroContainer">
          <Logo />
          <HomeBookButton />
          <HeroImage />
      </section>
  );
}