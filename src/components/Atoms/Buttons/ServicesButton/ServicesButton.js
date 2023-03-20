import "./servicesButton.css";
import { Link } from "react-router-dom";

export default function ServicesButton() {
    return (
        <Link to="/services">
            <div className="buttonContainer">
                    <button className="button">View Services!</button>
            </div>
        </Link>
    );
}
