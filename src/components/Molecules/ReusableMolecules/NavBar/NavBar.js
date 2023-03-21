import "./NavBar.css"
import NavHome from "../../../Atoms/Buttons/NavButtons/NavHome";
import NavAbout from "../../../Atoms/Buttons/NavButtons/NavAbout";
import NavServices from "../../../Atoms/Buttons/NavButtons/NavServices";
import NavConnect from "../../../Atoms/Buttons/NavButtons/NavConnect";

export default function NavBar() {
  return (
    <nav className="navbarContainer">
      <div className="navbar">
        <NavHome />
        <NavAbout />
        <NavServices />
        <NavConnect />
      </div>
    </nav>
  );
}
