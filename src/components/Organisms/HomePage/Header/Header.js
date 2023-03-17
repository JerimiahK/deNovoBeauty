import "./Header.css"
import Logo from "../../../Atoms/Pictures/Logo";
import HomeBookButton from "../../../Atoms/Buttons/HeaderButton/HomeBookButton";

export default function HomeHeader() {
  return (
      <section className="heroContainer">
        <Logo />
        <HomeBookButton />
      </section>
  );
}