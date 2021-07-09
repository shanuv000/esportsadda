import WalletCard from './WalletCard';
import React, {useContext} from "react";
import {FireContext} from "../Firecontext";

const Profile =()=>{
    // newUserCollection
    let coin ='No Coin';

    const { newUserCollection,currentUser} = useContext(FireContext);
    const currentUserid = currentUser?currentUser.uid:null;
newUserCollection.map((s)=>{
    const ll = s.ownerId;
    if(ll.includes(currentUserid)){
   return    coin=s.coin;
    }else{
        return coin;
    }

});


return    <>
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