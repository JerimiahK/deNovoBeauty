import "./phoneButton.css";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/LocalPhone";

export default function PhoneButton() {
    return (
        <div className="phoneContainer">
            <Button
                startIcon={<PhoneIcon className="phoneIcon" />}
                style={{color: "#000"}}
                target="_blank"
                href={`mailto:denovobeauty.info@gmail.com`}
            />
            <div>720-555-9597</div>
        </div>
    );
}
