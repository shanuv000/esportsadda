import React, {useContext, useState} from "react";
import {FireContext} from "../components/Firecontext";
import {useHistory} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import firebase from "../firebase";
// import { Button, IconButton } from "@material-ui/core";
// import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
const User = () => {
    const {currentUser, gameId, refUser,newUserCollection} = useContext(FireContext);
    // console.log(gameId);
    const history = useHistory();
    const [coin, setCoin] = useState(100);
    const [gameName, setGameName] = useState("");

    function AddUser() {


        const owner = currentUser ? currentUser.uid : null;
        const ownerPhone = currentUser
            ? currentUser.phoneNumber
            : alert("Please Login");

        //Validating Coins
        // newUserCollection.map((user)=>{
        //     if(user.includes(owner)){
        //      if(user.coin<=){
        //
        //      }
        //
        //     }
        //
        // })



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
            {!currentUser ? <div className="alert alert-warning text-center" role="alert">
                <h1 className={'text-danger'}>Please Login Before Proceed</h1>
            </div> : null}

            <div className="container">
                <h1 className="text-center mt-3">

                    Type your Game Name
                </h1>
                <div className="form-group text-center mb-3 mt-1">
                    <input
                        disabled={!currentUser}
                        type="name"
                        onChange={(e) => setGameName(e.target.value)}
                        class="form-control"
                        placeholder="Enter Game Name"
                    />
                </div>
                {currentUser ? <p className={'text-danger'}>Please be sure before typing name. You Can't change after
                    input.</p> : null}
                <button className="btn btn-primary mt-3" disabled={!currentUser} onClick={() => AddUser()}>
                    Add User
                </button>
            </div>
        </>
    );
}

export default User;
