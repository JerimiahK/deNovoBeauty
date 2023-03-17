import { style } from "../../../Style/Style.js";
import Logo from "../../Atoms/Pictures/Logo";
import HomeBookButton from "../../Atoms/Buttons/HomeBookButton";

export default function HomeHeader() {
  return (
      <section style={style.heroContainer}>
        <Logo />
        <HomeBookButton />
      </section>
  );
}