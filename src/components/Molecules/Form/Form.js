import Form from "react-bootstrap/Form";
import ContactText from "../../Atoms/Text/HomePage/ContactText/ContactText";
import "./form.css";

export default function FormComponent() {
    return (
        <Form>
            <ContactText />
            <Form.Group
                className="mb-3 formComponent"
                controlId="formGroupEmail"
            >
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter First & Last Name" />
            </Form.Group>
            <Form.Group
                className="mb-3 formComponent"
                controlId="formGroupPassword"
            >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="xxx-xxx-xxxx" />
            </Form.Group>
            <Form.Group
                className="mb-3 formComponent"
                controlId="formGroupPassword"
            >
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
        </Form>
    );
}
