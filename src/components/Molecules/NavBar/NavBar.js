import "./NavBar.css"
import NavHome from "../../Atoms/Buttons/NavHome";
import NavAbout from "../../Atoms/Buttons/NavAbout";
import NavServices from "../../Atoms/Buttons/NavServices";
import NavConnect from "../../Atoms/Buttons/NavConnect";

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
