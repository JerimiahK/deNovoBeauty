import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import "./icons.css";

export default function Instagram() {
    return (
        <Button
            startIcon={<TwitterIcon className="socialIcon" />}
            target="_blank"
        />
    );
}
