import React, { useContext } from "react";
// import firebase from "./firebase";
import { FireContext } from "./components/Firecontext";

const Demo = () => {
  const { currentUser, logout } = useContext(FireContext);

  return (
    <div className="container mt-4">
      <div>
        {currentUser ? "Phone Number: " + currentUser.phoneNumber : "Login"}
        <button className="btn btn-danger ml-3" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Demo;
