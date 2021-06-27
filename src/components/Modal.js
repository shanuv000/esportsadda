
import {Button, Container, Modal} from "react-bootstrap";
import React, {useState} from "react";
import FirebaseOtp from '../Firebaseotp';
// import FirebaseOtp from "../Firebaseotp";



function Example(props) {
    const values =  'sm-down';
        // 'md-down', 'lg-down', 'xl-down', 'xxl-down'

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>

            <button onClick={() => handleShow(values)} className={` ${props.styling}`}>Login</button>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><FirebaseOtp/></Modal.Body>
            </Modal>
        </>
    );
}

export default Example;
//
// function MyVerticallyCenteredModal(props) {
//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Login
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <FirebaseOtp/>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={props.onHide}>Close</Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }
//
// function App(props) {
//     const [modalShow, setModalShow] = React.useState(false);
//
//     return (
//         <>
//             {/*<Button variant="primary" onClick={() => setModalShow(true)}>*/}
//             {/*Open*/}
//             {/*</Button>*/}
//             <button onClick={() => setModalShow(true)} className={` ${props.styling}`}>Login</button>
//
//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </>
//     );
// }
// export default App;