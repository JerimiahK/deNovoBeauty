import "./emailButton.css";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

export default function EmailButton() {
    return (
        <div className="emailContainer">
            <Button
                style={{color: "#000"}}
                target="_blank"
                href={`mailto:denovobeauty.info@gmail.com`}
            >
                <EmailIcon className="emailIcon" />
            </Button>
            <Button
                style={{color: "#000"}}
                target="_blank"
                href={`mailto:denovobeauty.info@gmail.com`}
            >
                <p className="emailText">denovobeauty.info@gmail.com</p>
            </Button>
        </div>
    );
}
