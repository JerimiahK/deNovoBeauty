import { style } from "../../Style/Style.js"
import { Button } from "@mui/material";

export default function HomeBookButton() {
  return (
    <div style={style.buttonContainer}>
      <Button href="/connect" style={style.bookButton}>Book An Appointment</Button>
    </div>
  );
}