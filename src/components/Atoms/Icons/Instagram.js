import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import "./icons.css";

export default function Instagram() {
    return (
        <Button
            className="socialButton"
            startIcon={<InstagramIcon className="socialIcon" />}
            target="_blank"
            href="https://www.instagram.com/denovobeauty_/"
        />
    );
}
