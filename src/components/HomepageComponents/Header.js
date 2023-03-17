import { style } from "../../Style/Style.js";
import Logo from "../ReusableComponents/LogoImage/Logo";
import NavBar from "../ReusableComponents/NavBar/NavBar";
import HomeBookButton from "../ReusableComponents/Buttons/HomeBookButton";

export default function HomeHeader() {
  return (
      <section style={style.heroContainer}>
        <Logo />
        <HomeBookButton />
        <NavBar />
      </section>
  );
}