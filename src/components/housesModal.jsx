import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function HousesModal({ Imagetitle, images, description }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    return (
        <>
            <div className={`bg-[url('${Imagetitle}')] h-96 w-96 bg-contain bg-no-repeat hover:scale-110 delay-100 duration-300`}
                onClick={() => setShow(true)}></div>
            <Modal show={show} onHide={handleClose} centered={true}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image}
                                    alt={`Slide ${index + 1}`}>
                                </img>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    {description}
                </Modal.Footer>
            </Modal>
        </>
    )
}
