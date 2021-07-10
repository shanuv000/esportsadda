import React, {useContext, useEffect, useState} from "react";
import {FireContext} from "../components/Firecontext";
import {useHistory} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
// import firebase from "../firebase";
import {useParams} from 'react-router-dom';
// import { Button, IconButton } from "@material-ui/core";
// import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
const Usersform = () => {
    const {game_Id} = useParams();

    const {currentUser, refUser, newUserCollection, pubg,refNewUser} = useContext(FireContext);
    const history = useHistory();
    const [gameName, setGameName] = useState("");
    const owner = currentUser ? currentUser.uid : null;
    const ownerPhone = currentUser ? currentUser.phoneNumber : null;

    const coinValidation = () => {
        let userCoin = +0;
        let userId =null;
        let gameId = +null;
        let gameCoin = +null;
        console.log('I dont know');
        // console.log(newUserCollection);
        newUserCollection.filter((owners) => owners.ownerId === owner)
            .map((users) => {
                userCoin = users.coin
                userId = users.id
            });
        console.log('hello-> ' + userCoin);
        pubg.filter((id) => id.id === game_Id)
            .map((pubg) => {
                gameId = pubg.gameId
                gameCoin = pubg.entryFee
            })


        // console.log(checkCoinDifference);

        if(userCoin>=gameCoin && currentUser)
        {
            const checkCoinDifference = userCoin - gameCoin;
            updateUserCoin(checkCoinDifference,userId);
            AddUser(gameId);
        }
    }

    const updateUserCoin=(UpdatedCoin,id)=>{
        const updateCoin = {coin: UpdatedCoin};
        refNewUser
            .doc(id)
            .update(updateCoin)
            .catch((err) => {
                console.log(err);
            });
    }



    function AddUser(gameId) {

        const newBgmi = {
            id: uuidv4(),
            ownerPhone,
            gameId,
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
        // alert("You are in Game..");
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
                        className="form-control"
                        placeholder="Enter Game Name"
                    />
                </div>
                {currentUser ? <p className={'text-danger'}>Please be sure before typing name. You Can't change after
                    input.</p> : null}
                <button className="btn btn-primary mt-3" disabled={!currentUser} onClick={() => coinValidation()}>
                    Add User
                </button>
            </div>
        </>
    );
}

export default Usersform;
