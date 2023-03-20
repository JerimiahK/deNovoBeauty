import "./faqs.css";
import DepositText from "../../Atoms/Text/ConnectPage/DepositText";
import CancellationText from "../../Atoms/Text/ConnectPage/CancellationText";
import SanitationText from "../../Atoms/Text/ConnectPage/SanitationText";
import InsuranceText from "../../Atoms/Text/ConnectPage/InsuranceText";
import OtherQuestText from "../../Atoms/Text/ConnectPage/OtherQuestText";

export default function FAQS() {
    return (
        <div className="faqsContainer">
            <h1 className="faqHeader">FAQ's</h1>
            <DepositText />
            <CancellationText />
            <SanitationText />
            <InsuranceText />
            <OtherQuestText />
        </div>
    );
}
