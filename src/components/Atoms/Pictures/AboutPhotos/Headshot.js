import "./aboutPhotos.css";
import AboutImg1 from "../../../../Assets/Pictures/About/About.jpg";

export default function Headshot() {
    return (
        <div className="img1Container">
            <img
                alt="De Novo Owner Victoria Sanchez"
                className="aboutImg1"
                src={AboutImg1}
            />
        </div>
    );
}
