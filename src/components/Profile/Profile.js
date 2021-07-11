import WalletCard from './WalletCard';
import React, {useContext} from "react";
import {FireContext} from "../Firecontext";
import {useHistory} from "react-router-dom";

const Profile = () => {
    // newUserCollection
    let coin = 'No Coin';
const history = useHistory();
    const {newUserCollection, currentUser, logout} = useContext(FireContext);
    const currentUserid = currentUser ? currentUser.uid : null;

    newUserCollection.filter((owns) => owns.ownerId === currentUserid)
        .map((coins) => coin = coins.coin);

    const logouting = () => {
        logout();
        history.push('/');
    }

    return <>
        <div className="container mt-1 mb-4  d-flex justify-content-end">
            <button onClick={logouting} className="btn btn-lg btn-block  btn-danger">Logout</button>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-6"/>
                <div className="col-sm-6">
                    <WalletCard coin={coin}/>
                </div>
            </div>
        </div>
    </>
};
export default Profile;