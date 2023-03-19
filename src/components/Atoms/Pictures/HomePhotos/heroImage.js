import Image from "../../../../Assets/Pictures/HeroImage/heroHome2.avif";
import "./heroImage.css";

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
