import AboutImg1 from "../../Atoms/Pictures/AboutPhotos/AboutImg1";
import AboutImg2 from "../../Atoms/Pictures/AboutPhotos/AboutImg2";
import Headshot from "../../Atoms/Pictures/AboutPhotos/Headshot";


export default function PhotoContainer() {
    return (
    <div className="photoContainer">
        <Headshot />
        <AboutImg1 />
        <AboutImg2 />
    </div>
    );
}
