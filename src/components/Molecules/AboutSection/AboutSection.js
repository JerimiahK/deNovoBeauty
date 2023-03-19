import "./aboutSection.css";
import Headshot from "../../Atoms/Pictures/AboutPhotos/Headshot";
import AboutText from "../../Atoms/Text/AboutPage/AboutText";

export default function AboutSection() {
    return (
        <div className="aboutSection">
            <AboutText />
            <Headshot />
        </div>
    );
}
