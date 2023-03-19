import "./NavButtons.css";
import {Link} from "react-router-dom";

export default function NavBarButton() {
  return (
      <Link className="navButton" to="/">
          Home
      </Link>
  );
}
