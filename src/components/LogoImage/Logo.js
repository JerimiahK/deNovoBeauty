import Logo from "../../Assets/Logo/Logo.png";
import { style } from "../../Style/Style.js";

export default function LogoImage() {
  return (
    <img alt="The De Novo Beauty logo" style={style.logoImage} src={Logo}/>
  )
}