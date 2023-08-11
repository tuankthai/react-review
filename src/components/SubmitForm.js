import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function SubmitForm({ names, setNames }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setNames([...names, { firstName, lastName }])
    };

    function handleOnChangeFirst(e) {
        setFirstName(e.target.value)
    }

    function handleOnChangeLast(e) {
        setLastName(e.target.value)
    }
    console.log({ firstName, lastName })
    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        onChange={handleOnChangeFirst}
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        onChange={handleOnChangeLast}
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default SubmitForm;