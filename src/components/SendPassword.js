// import moment from "moment";
// import React from "react";
// import {FireContext} from "./Firecontext";

export const sendMessageToUser=(currentUser,pubg,user)=>{
    // const {currentUser,gameUserandPass} =useContext(FireContext);

    const items=[{}];
    const currentUserID = currentUser?currentUser.uid:null;
    let bgmiUser=null;
    let bgmiPassword=null;
    let bgmigameId=null;

    pubg.map((pubg)=>{
        user.map((user)=>{

            if(user.owner.includes(currentUserID)&&user.gameId.includes(pubg.gameId)){
                if(pubg.match_condition===1){
                    bgmiUser=      pubg.bgmiUserName;
                    bgmiPassword=  pubg.bgmiUserPassword;
                    bgmigameId= pubg.gameId;
                        items.push({"room":bgmiUser,"password":bgmiPassword,"gameIds":bgmigameId,'time':pubg.selectedDate});
                }
            }
        })
    })
return items;
}
