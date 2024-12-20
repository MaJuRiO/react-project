import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Test() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <div class="bg-[url('../img/house2/01JCNDRN5AEFXHSC63P8FXZYK8.webp')] h-96 w-96 bg-contain bg-no-repeat hover:scale-110 delay-100 duration-300"
                onClick={() => setShow(true)}></div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Test;