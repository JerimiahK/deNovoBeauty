import "./servicesBox.css"
import PersonalMakeup from "../../Atoms/Text/HomePage/ServicesText/PersonalMakeup"
import Editorial from "../../Atoms/Text/HomePage/ServicesText/Editorial";
import Bridal from "../../Atoms/Text/HomePage/ServicesText/Bridal";
import Tutorials from "../../Atoms/Text/HomePage/ServicesText/Tutorials";
import PersonalServices from "../../Atoms/Text/HomePage/ServicesText/PersonalServices";
import VirtualService from "../../Atoms/Text/HomePage/ServicesText/VirtualService";

export default function ServicesBox() {
  return (
      <div className="servicesBox">
          <Bridal />
          <PersonalMakeup />
          <Tutorials />
          <Editorial />
          <PersonalServices />
          <VirtualService />
      </div>
  );
}