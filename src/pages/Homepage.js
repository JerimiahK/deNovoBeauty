import { style } from "../Style/Style.js";
import Logo from "../components/ReusableComponents/LogoImage/Logo";
import NavBar from "../components/ReusableComponents/NavBar/NavBar";
import HomeBookButton from "../components/ReusableComponents/Buttons/HomeBookButton";

export default function Homepage() {
  return (
    <div>
      <section style={style.heroContainer}>
        <Logo />
        <HomeBookButton />
        <NavBar />
      </section>
      <section>
        <div>
          <h1>Testimonials</h1>
        </div>
      </section>
    </div>
  );
}
