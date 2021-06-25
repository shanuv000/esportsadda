import React, { useContext, useState } from "react";
import { FireContext } from "../components/Firecontext";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import firebase from "../firebase";
// import { Button, IconButton } from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";

const User = () => {
  const { currentUser, gameId, refUser } = useContext(FireContext);
  console.log(gameId);
  const history = useHistory();
  const [coin, setCoin] = useState(100);
  const [gameName, setGameName] = useState("");
  function AddUser() {
    const owner = currentUser ? currentUser.uid : null;
    const ownerPhone = currentUser
      ? currentUser.phoneNumber
      : alert("Please Login");
    // const [gameId, setGameId] = value2;
    console.log(ownerPhone + " " + coin + " " + owner + " " + gameId);
    const newBgmi = {
      id: uuidv4(),
      ownerPhone,
      gameId,
      coin,
      owner,
      gameName,
      createdAt: new Date(),
    };
    refUser
      .doc(newBgmi.id)
      .set(newBgmi)
      .catch((err) => {
        console.log(err);
      });
    alert("You are in Game..");
    history.goBack();
  }
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3">
          <AccessAlarm color="primary" className="mr-3" />
          Game Name
        </h1>
        <div class="form-group" className="text-center mb-3 mt-1">
          <input
            type="name"
            onChange={(e) => setGameName(e.target.value)}
            class="form-control"
            placeholder="Enter Game Name"
          />
        </div>
        <button class="btn btn-primary " onClick={() => AddUser()}>
          Add User
        </button>
      </div>
    </>
  );
};

export default User;
