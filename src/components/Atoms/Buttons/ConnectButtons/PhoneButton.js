import "./phoneButton.css";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/LocalPhone";

export default function PhoneButton() {
    return (
        <div className="phoneContainer">
            <Button
                style={{
                    color: "#000",
                }}
                target="_blank"
                href={`tel:720-687-9597`}
            >
                <PhoneIcon className="phoneIcon" />
            </Button>
            <Button
                style={{
                    color: "#000",
                }}
                target="_blank"
                href={`tel:720-687-9597`}
            >
                <p className="phoneText">720-687-9597</p>
            </Button>
        </div>
    );
}
