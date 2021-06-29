
// import {Button, Container, Modal} from "react-bootstrap";
import React, {useState} from "react";
import FirebaseOtp from '../Firebaseotp';


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" className={` ${props.styling}`} onClick={handleOpen}>
                {props.name}
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{props.name}</h2>
                        <p id="transition-modal-description"><FirebaseOtp/></p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

// import FirebaseOtp from "../Firebaseotp";
//
//
//
// function Example(props) {
//     const values =  'sm-down';
//         // 'md-down', 'lg-down', 'xl-down', 'xxl-down'
//
//     const [fullscreen, setFullscreen] = useState(true);
//     const [show, setShow] = useState(false);
//
//     function handleShow(breakpoint) {
//         setFullscreen(breakpoint);
//         setShow(true);
//     }
//
//     return (
//         <>
//
//             <button onClick={() => handleShow(values)} className={` ${props.styling}`}>{props.name}</button>
//             <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//                 <Modal.Header closeButton>
//                 </Modal.Header>
//                 <Modal.Body><FirebaseOtp/></Modal.Body>
//             </Modal>
//         </>
//     );
// }
//
// export default Example;