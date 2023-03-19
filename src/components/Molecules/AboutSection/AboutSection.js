import "./aboutSection.css";
import AboutText from "../../Atoms/Text/AboutPage/AboutText";
import PhotoContainer from "./PhotoContainer";

export default function AboutSection() {
    return (
        <div className="aboutSection">
            <AboutText />
            <PhotoContainer />
        </div>
    );
}
