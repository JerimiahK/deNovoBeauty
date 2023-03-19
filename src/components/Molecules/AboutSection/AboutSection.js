import "./aboutSection.css";
import Headshot from "../../Atoms/Pictures/AboutPhotos/Headshot";
import AboutText from "../../Atoms/Text/AboutPage/AboutText";
import PhotoContainer from "./PhotoContainer";

export default function AboutSection() {
    return (
        <>
            <div className="aboutSection">
                <AboutText />
                <Headshot />
            </div>
            <PhotoContainer />
        </>
    );
}
