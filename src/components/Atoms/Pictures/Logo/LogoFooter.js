import Logo from "../../../../Assets/Logo/Logo.png";
import "./logo.css";

export default function LogoFooter() {
    return (
        <a className="logoFooterContainer" href="/">
            <img
                alt="The De Novo Beauty logo"
                className="logoFooter"
                src={Logo}
            />
        </a>
    );
}
