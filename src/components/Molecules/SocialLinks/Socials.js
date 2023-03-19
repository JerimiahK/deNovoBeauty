import "./socials.css";
import FacebookIcon from "../../Atoms/Icons/Facebook";
import InstagramIcon from "../../Atoms/Icons/Instagram";

export default function Socials() {
    return (
        <div className="rightContainer">
            <p>Join Me On My Socials!</p>
            <div className="socialsContainer">
                <FacebookIcon />
                <InstagramIcon />
            </div>
        </div>
    );
}
