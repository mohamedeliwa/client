import React, {useState} from 'react'
import { Button, Modal} from "react-bootstrap"


export default (props) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        {props.children}
      </Modal>
    </div>
)}