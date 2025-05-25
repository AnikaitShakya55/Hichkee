import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPizzaSlice } from "react-icons/fa";
import "./OrderModal.module.css";

function OrderModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="responsive-modal"
        contentClassName="p-3"
      >
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <FaPizzaSlice className="me-2 text-danger" />
            <span className="fs-5">Order Your Meals</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-2">Choose from our delicious selection of meals.</p>
          <p className="mb-2">
            From savory pizzas to mouthwatering burgers, we've got it all!
          </p>
          <p className="mb-0">
            Don't forget to add some sides and desserts to complete your order.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="w-100">
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderModal;
