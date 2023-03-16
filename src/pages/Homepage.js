import { style } from "../Style/Style.js";
import Logo from "../components/LogoImage/Logo";

export default function Homepage() {
  return (
    <div style={style.heroContainer}>
      <Logo />
    </div>
  )
}