import { useRef } from "react";
import Form from "react-bootstrap/Form";
import ContactText from "../../../Atoms/Text/HomePage/ContactText/ContactText";
import ContactButton from "../../../Atoms/Buttons/ContactButton/ContactButton";
import emailjs from "@emailjs/browser";
import {useForm} from "react-hook-form";
import "./form.css";

export default function FormComponent() {
    const form = useRef();

    const {
        handleSubmit,
    } = useForm();

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                "service_zybeesa",
                "template_5teyiv5",
                form.current,
                "f-wjnZS_2jx97JSX5"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Email Sent");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const onSubmit = handleSubmit((data) => {
        sendEmail(data);
    });

    return (
        <div className="formContainer">
            <Form ref={form} onSubmit={onSubmit}>
                <ContactText />
                <Form.Group
                    className="mb-3 formComponent"
                    controlId="formGroupEmail"
                >
                    <Form.Label className="contactTextFields">Name</Form.Label>
                    <Form.Control
                        name="name"
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
                    <Form.Control name="phone" type="phone" placeholder="xxx-xxx-xxxx" />
                </Form.Group>
                <Form.Group
                    className="mb-3 formComponent"
                >
                    <Form.Label className="contactTextFields">
                        Email Address
                    </Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label className="contactTextFields">
                        Comments & Questions
                    </Form.Label>
                    <Form.Control
                        name="comment"
                        placeholder="Write Message Here"
                        as="textarea"
                        rows={3}
                    />
                </Form.Group>
                    <ContactButton />
            </Form>
        </div>
    );
}
