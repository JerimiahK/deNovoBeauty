import Logo from "../../../Assets/Logo/Logo.svg";
import { style } from "../../../Style/Style.js";

export default function LogoImage() {
  return (
    <a href="/">
      <img alt="The De Novo Beauty logo" style={style.logoImage} src={Logo} />
    </a>
  );
}
