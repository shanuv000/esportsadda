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
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import moment from "moment";

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
    const {currentUser,gameUserandPass,AddnewUsers} =useContext(FireContext);
   const history=useHistory();



   //For showing room Id, Password and  messages to User.



    // console.log(gameUserandPass);
    // useEffect(()=>{
    //     AddnewUsers();
    // },[])
    return (
        <>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className='con__con'  >
                <Container >
                    <Navbar.Brand href="/" className='nav__brand'  >
                        <h1 className="text-hide">BGMI Tournament<img className='img__logo' src={logos} alt="" /></h1>

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className=" ml-auto ">
                            {/*<ul className="navbar-nav mr-auto " style={{width:'100%'}}>*/}

                                    <Nav.Link as={NavLink} exact  to='/' href='/'>
                                    HOME
                                </Nav.Link>
                            <Nav.Link as={NavLink} to='/tournament' href='/tournament'>
                                Tournament
                            </Nav.Link>
                                {/*<li className="nav-item ml-md-5 ">*/}
                                    <Nav.Link as={NavLink}  to='/demo' href='/demo'>
                                    DEMO
                                </Nav.Link>
                                {/*</li>*/}
                                {/*    <Nav.Link as={NavLink}  to='/cards' href='/cards'>*/}
                                {/*    CARDS*/}
                                {/*</Nav.Link>*/}
                                    <Nav.Link as={NavLink}  to='/otp' href='/otp'>
                                    OTP
                                </Nav.Link>


                                {/*<li className="nav-item ml-md-5 ">*/}
                                {/*    <NavLink activeClassName="is-active" collapseOnSelect='false'  className="nav-link "   exact={true} to="/cards">CARD</NavLink>*/}

                                {/*</li>*/}
                                {/*<li className="nav-item ml-md-5">*/}
                                {/*    <NavLink activeClassName="is-active" collapseOnSelect  className="nav-link "   exact={true} to="/otp">OTP</NavLink>*/}
                                {/*</li>*/}
                                {/*    <Nav.Link as={NavLink}  to='/usertable' href='/usertable'>*/}
                                {/*    USER TABLE*/}
                                {/*</Nav.Link>*/}
                            <Nav.Link as={NavLink}  to='/new' href='/new'>
                                New User
                            </Nav.Link>
                                {/*<li className="nav-item ml-md-5">*/}
                                {/*    <NavLink activeClassName="is-active" collapseOnSelect  className="nav-link "   exact={true} to="/usertable">User Table</NavLink>*/}
                                {/*</li> */}
                                {/*    <Nav.Link as={NavLink} exact={true}  to='/pubgtable' href='/pubgtable'>*/}
                                {/*    BGMI TABLE*/}
                                {/*</Nav.Link>*/}
                            {/*<Nav.Link as={NavLink}  to='/pubgform' href='/pubgform'>*/}
                            {/*    BGMI FORM*/}
                            {/*</Nav.Link>*/}

                                {/*<NavLink activeClassName="is-active" collapseOnSelect  className="nav-link "   exact={true} to="/pubgtable">BGMI Table</NavLink>*/}
                                {/*<NavLink activeClassName="is-active" collapseOnSelect className="nav-link "   exact={true} to="/pubgform">BGMI Form</NavLink>*/}
                                <li className="nav-item active ">
                                    {currentUser?
                                        <p className='nav-link text-light'>{currentUser.phoneNumber}</p>:
                                        <Modal name={'Login'} styling={'btn  btn-block btn-lg btn-outline-danger' +
                                        ' ml-md-5'}/>
                                    }
                                         {/*<button  className=" btn btn-block btn-lg btn-outline-danger ml-md-5" >Login</button>}*/}
                                </li>
                            {/*</ul>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

                {showMessage(gameUserandPass)}

        </>

    );
};

export default Header;