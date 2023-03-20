import "./pageContainer.css";
import "./FAQS"
import FAQS from "./FAQS";
import ConnectInfo from "./ConnectInfo";

export default function pageContainer() {
  return (
    <div className="pageContainer">
        <FAQS />
        <ConnectInfo />
    </div>
  )
}