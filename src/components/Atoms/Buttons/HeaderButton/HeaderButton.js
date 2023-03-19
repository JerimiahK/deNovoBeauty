import "./HeaderButton.css";
import { Button } from "@mui/material";

export default function HomeBookButton() {
  return (
    <div className="buttonContainer">
      <Button href="/connect" style={style.button}>Book An Appointment</Button>
    </div>
  );
}

// Material UI Button Style
const style = {
  button: {
    background: "#e2cdfa",
    border: "2px solid black",
    color: "#0d0d0d",
    margin: "2px",
    fontSize: 15,
    fontFamily: "'Roboto', serif",
    height: 80,
    width: 190,
    borderRadius: 10,
    textAlign: "center",
  },
};