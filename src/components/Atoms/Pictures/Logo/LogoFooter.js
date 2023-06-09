import Logo from "../../../../Assets/Logo/Logo.png";
import "./logoFooter.css";
import { Link } from "react-router-dom";

export default function LogoFooter() {
    return (
        <Link className="logoFooterContainer" to="/">
            <img
                alt="The De Novo Beauty logo"
                className="logoFooter"
                src={Logo}
            />
        </Link>
    );
}
