import "./partyMakeup.css";
import Pic1 from "../../../Assets/Pictures/MiscImages/party.jpg";

export default function PartyMakeupCard() {
    return (
        <div className="partyMakeupContainer">
            <div>
                <h3>Party Makeup</h3>
                <img alt="3 blue colored balloons aginst a white background." className="partyImg" src={Pic1} />
            </div>
            <div className="partyOptionsContainer">
                <h3>Party Makeup Information</h3>
                <div className="optionsContainer">
                    <p>
                        Party Makeup prices will vary by the number of
                        applications and the amount of time that you want to
                        book.
                    </p>
                </div>
            </div>
        </div>
    );
}
