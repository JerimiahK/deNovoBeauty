import Image from "../../../Assets/Pictures/heroHome2.avif";
import "./Pictures.css";

export default function HeroImage() {
    return (
        <div className="heroImageContainer">
            <img
                alt="A colorful powder explosion"
                className="heroImage"
                src={Image}
            />
        </div>
    );
}
