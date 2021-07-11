import React, {useContext, useEffect, useRef} from "react";
import "./Header.css";
// import RealTime from "./RealTime";
import { FireContext } from "./Firecontext";
import {useHistory} from "react-router-dom";
import FirebaseOtp from "../Firebaseotp";
import { Container,NavDropdown, Navbar, Nav } from "react-bootstrap";
import Modal from './Modal';
import {NavLink} from "react-router-dom";
import logos from '../assets/logo13.svg';
import moment from "moment";
import CreateNewProfile from '../admin/CreateNewProfile';

export const showMessage=(gameUserandPass)=>{
    return    gameUserandPass.map((room)=>{
        const roomId= room.room;
        const password=room.password;
        const gameNum=room.gameIds;
        let  validate= !(roomId==null||password==null);

        const timing=moment(room.time).format("LLL");

        console.log(timing);

        return validate?(<div className="alert alert-info" role="alert">
            <h2 className={'text-center'}>Game Id:{gameNum}</h2>
            <h5 className={'text-center'}>Room Name: <span className={'text-danger font-weight-bold'}>{roomId}</span> and Password: <span className={'text-danger font-weight-bold'}>{password}</span></h5>
            <p className={'text-center'}>is Scheduled at <span className={'text-danger'}>{timing}</span></p>
        </div> ):null

    })}



const Header = (props) => {
    const {currentUser,gameUserandPass} =useContext(FireContext);
   const history=useHistory();
    // const walletImg = ;


   //For showing room Id, Password and  messages to Usersform.



    // console.log(gameUserandPass);
    // useEffect(()=>{
    //     AddnewUsers();
    // },[])



    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className='con__con'  >
                {/*<Container>*/}
                <div className="container">
                    <Navbar.Brand href="/" className='nav__brand'  >
                        <h1 className="text-hide">BGMI Tournament<img className='img__logo' src={logos} alt="" /></h1>

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className=" ml-auto d-flex justify-content-around font-weight-bold "
                        style={{width:"100%",}}>
                            {/*<ul className="navbar-nav mr-auto " style={{width:'100%'}}>*/}

                                    <Nav.Link as={NavLink} exact  to='/' href='/'>
                                    HOME
                                </Nav.Link>
                            <Nav.Link as={NavLink} to='/tournament' href='/tournament'>
                                Tournament
                            </Nav.Link>





                            <Nav.Link as={NavLink}  to='/new' href='/new'>
                                New User
                            </Nav.Link>
                                    {currentUser?
                                        // <p className='nav-link text-light'>{currentUser.phoneNumber}</p>
                                        <Nav.Link as={NavLink} className={'text-success bg-dark'}  to='/profile' href='/profile'>
                                            {currentUser.phoneNumber}
                                        </Nav.Link>
                                        :
                                        <Modal name={'Login'} styling={'btn  btn-block btn-lg btn-outline-danger' +
                                        ' ml-md-5'}/>
                                    }

                                {/*</li>*/}
                            {/*<li className="nav-item active ">*/}
                            {/*    <p className='nav-link text-light'>{walletImg}</p>*/}
                            {/*</li>*/}
                            {/*</ul>*/}
                        </Nav>
                    </Navbar.Collapse>
                {/*</Container>*/}
                </div>
            </Navbar>

                {showMessage(gameUserandPass)}
            <CreateNewProfile/>

        </>

    );
};

export default Header;