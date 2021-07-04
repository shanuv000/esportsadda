import React, { useState, useContext } from "react";
import { FireContext } from "../components/Firecontext";
import {sendMessageToUser} from '../admin/SendPassword';

const Tabs=()=>{
    const { currentUser,pubg,user,gameUserandPass } = useContext(FireContext);

    const p=[];
    p.push('shanu','sjsj');
    console.log(p);


//     const p=sendMessageToUser(currentUser,pubg,user);
//     // console.log(p);
//     let ps='';let us='';
//     console.log(gameUserandPass);
//     gameUserandPass.map((o)=>{
//     console.log(o.user)
//         us=o.user;ps=o.pass;
// })
    return <>
    <h1>Shanu</h1>
        {/*<h2>{us}</h2>*/}
        {/*<h2>{ps}</h2>*/}


    </>
}
export default Tabs;
