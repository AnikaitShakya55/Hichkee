import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPizzaSlice } from 'react-icons/fa'; 
function OrderModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
   
        centered 
      >
        <Modal.Header closeButton>
          <Modal.Title><FaPizzaSlice style={{ marginRight: '6px' }} /> Order Your Meals</Modal.Title> {/* Add pizza icon to modal title */}
        </Modal.Header>
        <Modal.Body>
          <p>Choose from our delicious selection of meals.</p>
          <p>From savory pizzas to mouthwatering burgers, we've got it all!</p>
          <p>Don't forget to add some sides and desserts to complete your order.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderModal;
