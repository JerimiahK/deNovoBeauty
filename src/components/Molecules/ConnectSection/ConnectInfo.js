import "./connectInfo.css";
import LogoImage from "../../Atoms/Pictures/Logo/LogoConnect";
import EmailButton from "../../Atoms/Buttons/ConnectButtons/EmailButton";
import PhoneButton from "../../Atoms/Buttons/ConnectButtons/PhoneButton";

export default function ConnectInfo() {
    return (
        <div className="connectInfoContainer">
            <h1>Connect With Me!</h1>
            <LogoImage />
            <EmailButton />
            <PhoneButton />
        </div>
    );
}
