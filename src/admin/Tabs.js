import React, {useState, useContext, useEffect} from "react";
import { FireContext } from "../components/Firecontext";
// import {sendMessageToUser} from '../components/SendPassword';
import {v4 as uuidv4} from "uuid";

const Tabs=()=>{
    const { getNewUser,currentUser,newUser,AddnewUsers} = useContext(FireContext);
let currentUserOwner=currentUser?currentUser.uid:null;
    let p=false;
getNewUser.map((user)=>{
// console.log(user.ownerId+'---'+currentUser.uid);

if(user.ownerId===currentUserOwner){

    // console.log(user.ownerId+'-----'+currentUserOwner);
    p=true
}
})

    // console.log(AddnewUsers());


    // console.log('shanu is '+p);

    useEffect(()=>{
        // console.log(newUser);
        console.log(AddnewUsers());
    },[newUser,getNewUser])


    return <>
    <h1>Shanu</h1>
        <h2>{+p}</h2>
        {/*<h2>{us}</h2>*/}
        {/*<h2>{ps}</h2>*/}


    </>
}
export default Tabs;
