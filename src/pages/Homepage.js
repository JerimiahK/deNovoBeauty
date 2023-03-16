import { style } from "../Style/Style.js";
import Logo from "../components/LogoImage/Logo";
import NavBar from "../components/NavBar/NavBar";
import HomeBookButton from "../components/Buttons/HomeBookButton.js";

export default function Homepage() {
  return (
    <div>
      <div style={style.heroContainer}>
        <Logo />
        <HomeBookButton />
        <NavBar />
      </div>
    </div>
  );
}