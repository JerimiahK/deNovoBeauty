import "./logoConnect.css";
import Logo from "../../../../Assets/Logo/Logo.png";
import { Link } from "react-router-dom";

export default function logoConnect() {
    return (
        <Link className="logoConnectContainer" to="/">
            <img
                alt="The De Novo Beauty logo"
                className="logoConnect"
                src={Logo}
            />
        </Link>
    );
}
