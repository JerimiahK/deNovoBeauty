import "./services.css";
import ServicesText from "../../../Atoms/Text/HomePage/ServicesText/ServicesText";
import ServicesBox from "../../../Molecules/ServicesBox/ServicesBox";

export default function Services() {
    return <div className="servicesContainer">
        <ServicesText />
        <ServicesBox />
    </div>;
}
