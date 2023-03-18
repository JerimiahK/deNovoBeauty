import "./socials.css";
import FacebookIcon from "../../Atoms/Icons/Facebook";
import TwitterIcon from "../../Atoms/Icons/Twitter";
import InstagramIcon from "../../Atoms/Icons/Instagram";

export default function Socials() {
    return (
        <div className="rightContainer">
            <p>Join Me On My Socials!</p>
            <div className="socialsContainer">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
        </div>
    );
}
