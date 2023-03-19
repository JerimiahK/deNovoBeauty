import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import "./icons.css";

export default function Instagram() {
    return (
        <Button
            startIcon={<FacebookIcon className="socialIcon" />}
            target="_blank"
            href="https://www.facebook.com/denovobeautyllc"
        />
    );
}
