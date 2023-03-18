import "./services.css";
import ServicesText from "../../../Atoms/Text/HomePage/ServicesText/HeaderText";
import ServicesBox from "../../../Molecules/ServicesBox/ServicesBox";
import ServicesButton from "../../../Atoms/Buttons/ServicesButton/ServicesButton";

export default function Services() {
    return <div className="servicesContainer">
        <ServicesText />
        <ServicesBox />
        <ServicesButton />
    </div>;
}
