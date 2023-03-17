import { style } from "../../Style/Style.js";
import Logo from "../Atoms/LogoImage/Logo";
import NavBar from "../Molecules/NavBar/NavBar";
import HomeBookButton from "../Atoms/Buttons/HomeBookButton";

export default function HomeHeader() {
  return (
      <section style={style.heroContainer}>
        <Logo />
        <HomeBookButton />
        <NavBar />
      </section>
  );
}