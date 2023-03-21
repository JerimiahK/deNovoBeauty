import Form from "react-bootstrap/Form";
import ContactText from "../../../Atoms/Text/HomePage/ContactText/ContactText";
import ContactButton from "../../../Atoms/Buttons/ContactButton/ContactButton";
import "./form.css";

export default function FormComponent() {
    return (
        <div className="formContainer">
            <Form>
                <ContactText />
                <Form.Group
                    className="mb-3 formComponent"
                    controlId="formGroupEmail"
                >
                    <Form.Label className="contactTextFields">Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter First & Last Name"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3 formComponent"
                    controlId="formGroupPassword"
                >
                    <Form.Label className="contactTextFields">
                        Phone Number
                    </Form.Label>
                    <Form.Control type="phone" placeholder="xxx-xxx-xxxx" />
                </Form.Group>
                <Form.Group
                    className="mb-3 formComponent"
                    controlId="formGroupPassword"
                >
                    <Form.Label className="contactTextFields">
                        Email Address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label className="contactTextFields">
                        Leave A Message
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <ContactButton />
            </Form>
        </div>
    );
}
