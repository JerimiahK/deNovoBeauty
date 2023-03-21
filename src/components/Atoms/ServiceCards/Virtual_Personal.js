import "./virtual_personal.css";
import Pic1 from "../../../Assets/Pictures/MiscImages/makeupMisc.jpg"

export default function Virtual_PersonalCard() {
    return (
        <div className="virtualMakeupContainer">
            <div>
                <h3>Personal & Virtual Services</h3>
                <img
                    alt="3 blue colored balloons aginst a white background."
                    className="virtualImg"
                    src={Pic1}
                />
            </div>
            <div className="virtualOptionsContainer">
                <h3>Personal & Virtual Services Information</h3>
                <div className="optionsContainer">
                    <p>
                        virtual Makeup prices will vary by the number of
                        applications and the amount of time that you want to
                        book.
                    </p>
                </div>
            </div>
        </div>
    );
}
