import "./pageContainer.css";
import "./FAQS";
import FAQS from "./FAQS";
import ConnectInfo from "./ConnectInfo";
import Contact from "./Contact";

export default function pageContainer() {
    return (
        <div className="connectPageContainer">
            <h1 className="connectHeaderText">Connect</h1>
            <div className="pageContainer">
                <Contact />
                <FAQS />
                <ConnectInfo />
            </div>
        </div>
    );
}
