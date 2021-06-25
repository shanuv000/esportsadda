import { Button, Modal } from "react-bootstrap";
import React from "react";
import FirebaseOtp from "../Firebaseotp";

function MyVerticallyCenteredModal(props) {
  const loggedOut = () => props.logout;
  const c = props.currentUser;
  console.log("Modal Current User " + c);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter ">
          {props.currentUser ? `Login ${props.currentUserPhone}` : `Logout `}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.currentUser ? (
          // <FirebaseOtp />
          "shanu"
        ) : (
          <button className="btn btn-danger" onClick={() => loggedOut()}>
            Logout
          </button>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        class="nav-link"
        variant="bg-transparent"
        onClick={() => setModalShow(true)}
      >
        {props.currentUserPhone}
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// React.render(<App />);
export default App;
