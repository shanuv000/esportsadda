import React, { useContext,useRef } from "react";
import "./Header.css";
// import RealTime from "./RealTime";
import { FireContext } from "./Firecontext";
// import FirebaseOtp from "../Firebaseotp";
import { Container,NavDropdown, Navbar, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logos from '../assets/logo13.svg';


const Header = (props) => {
    const {currentUser} =useContext(FireContext);
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg={props.backColor} variant="dark"  >
            <Container className='con__con'>
                <Navbar.Brand href="/" className='' >
                    <h1 className="text-hide">BGMI Tournament<img className='img__logo' src={logos} alt="" /></h1>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav d-flex align-self-center" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className=" ml-auto ">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item ml-md-5 ">
                                <NavLink activeClassName="is-active"  className="nav-link "   exact={true} to="/">HOME</NavLink>

                            </li>
                            <li className="nav-item ml-md-5">
                        <NavLink activeClassName="is-active"  className="nav-link "   exact={true} to="/otp">OTP</NavLink>
                        </li>

                            <li className="nav-item ml-md-5">
                                <NavLink activeClassName="is-active"  className="nav-link "   exact={true} to="/usertable">User Table</NavLink>
                            </li>  <li className="nav-item ml-md-5">
                            <NavLink activeClassName="is-active"  className="nav-link "   exact={true} to="/pubgtable">BGMI Table</NavLink>
                        </li>  <li className="nav-item ml-md-5">
                            <NavLink activeClassName="is-active"  className="nav-link "   exact={true} to="/pubgform">BGMI Form</NavLink>
                        </li>
                            <li className="nav-item active ml-md-5">
                            {currentUser?<p className='nav-link text-muted'>{currentUser.phoneNumber}</p>:<button  className=" btn btn-block btn-lg btn-outline-danger ml-md-5" >Login</button>}
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>

  );
};

export default Header;
