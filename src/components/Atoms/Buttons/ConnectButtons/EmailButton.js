import "./emailButton.css";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

export default function EmailButton() {
    return (
        <div className="emailContainer">
            <Button
                startIcon={<EmailIcon className="emailIcon" />}
                style={{ color: "#000" }}
                target="_blank"
                href={`mailto:denovobeauty.info@gmail.com`}
            />
            <div>denovobeauty.info@gmail.com</div>
        </div>
    );
}
