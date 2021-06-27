import React, { useContext } from "react";
// import firebase from "./firebase";
import { FireContext } from "./components/Firecontext";
import Modals from './components/Modal'
// import {isInaccessible} from "@testing-library/react";

const Demo = () => {
  const { currentUser, logout } = useContext(FireContext);
  return (
    <div className="container mt-4">
      <div className="row mt-5">
        <div className={'mt-4 col-5'}>
       <h1>{currentUser ? "Phone Number: " + currentUser.phoneNumber : "Login"}</h1>
        <button className="btn btn-danger btn-lg ml-3" onClick={logout}>
          Logout
        </button>
      </div>
        <div className="col-5 mt-4">
            <Modals/>
            {/*<button onClick={()=>accessModal} className="btn btn-lg btn-success mx-auto">Access Modal</button>*/}
        </div></div>
    </div>
  );
};

export default Demo;
