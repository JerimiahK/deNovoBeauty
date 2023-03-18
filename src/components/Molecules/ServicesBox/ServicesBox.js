import "./servicesBox.css"
import PersonalMakeup from "../../Atoms/Text/HomePage/ServicesText/PersonalMakeup"
import Editorial from "../../Atoms/Text/HomePage/ServicesText/Editorial";
import Facials from "../../Atoms/Text/HomePage/ServicesText/Facials";
import Tutorials from "../../Atoms/Text/HomePage/ServicesText/Tutorials";

export default function ServicesBox() {
  return (
    <div className="servicesBox">
      <PersonalMakeup />
      <Tutorials />
      <Editorial />
      <Facials />
    </div>
  )
}