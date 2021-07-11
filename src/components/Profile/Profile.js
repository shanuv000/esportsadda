import WalletCard from './WalletCard';
import React, {useContext} from "react";
import {FireContext} from "../Firecontext";
import {useHistory} from "react-router-dom";
import Referral from './Referral';


const Profile = () => {
    // newUserCollection
    let coin = '';
    let referral = '';
    let currentId = null;
    let referralValidation=0;
const history = useHistory();
    const {newUserCollection, currentUser, logout} = useContext(FireContext);
    const currentUserid = currentUser ? currentUser.uid : null;

    newUserCollection.filter((owns) => owns.ownerId === currentUserid)
        .map((coins) => {
            coin = coins.coin
            referral = coins.referral
            currentId = coins.id;
            referralValidation=coins.referralValidation;
        });

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
                <div className="col-sm-6"><Referral coin={coin} referral ={referral} currentId={currentId} referralValidation={referralValidation}/></div>
                <div className="col-sm-6">
                    <WalletCard coin={coin}/>
                </div>
            </div>
        </div>
    </>
};
export default Profile;