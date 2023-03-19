import "./headshot.css";
import HeadshotPicture from "../../../../Assets/Pictures/About/About.jpg";

export default function Headshot() {
    return (
        <div className="headshotContainer">
            <img
                alt="De Novo Owner Victoria Sanchez"
                className="headshot"
                src={HeadshotPicture}
            />
        </div>
    );
}
