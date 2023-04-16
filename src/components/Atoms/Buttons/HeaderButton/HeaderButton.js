import "./HeaderButton.css";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

export default function HomeBookButton() {
    return (
        <div className="headerButtonContainer">
            <Button
                href="https://denovobeautyllc.com/connect"
                target="_blank"
                style={style.button}
            >
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/connect"
                >Book An Appointment</Link>
            </Button>
        </div>
    );
}

// Material UI Button Style
const style = {
    button: {
        background: "#fff",
        border: "2px solid black",
        color: "#0d0d0d",
        margin: "2px",
        fontSize: 15,
        fontFamily: "'Roboto', serif",
        height: 80,
        width: 190,
        borderRadius: "3px",
        textAlign: "center",
    },
};
