import Image from "../../../Assets/Pictures/heroHome2.avif";
import "./Pictures.css";

export default function HeroImage() {
    return (
            <img
                alt="A colorful powder explosion"
                className="heroImage"
                src={Image}
            />
    );
}
