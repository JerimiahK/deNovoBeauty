import { style } from "../../../Style/Style.js";
import NavHome from "../../Atoms/Buttons/NavHome";
import NavAbout from "../../Atoms/Buttons/NavAbout";
import NavServices from "../../Atoms/Buttons/NavServices";
import NavConnect from "../../Atoms/Buttons/NavConnect";

export default function NavBar() {
  return (
    <nav style={style.navbarContainer}>
      <div className="navBar">
        <NavHome />
        <NavAbout />
        <NavServices />
        <NavConnect />
      </div>
    </nav>
  );
}
