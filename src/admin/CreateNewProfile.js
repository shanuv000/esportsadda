import React, {useState, useContext, useEffect} from "react";
import {FireContext} from "../components/Firecontext";
// import {sendMessageToUser} from '../components/SendPassword';
import {v4 as uuidv4} from "uuid";

const CreateNewProfile = () => {
    const { currentUser, newUser, refNewUser,newUserIdCollection} = useContext(FireContext);
    const [coin,setCoin] =useState(100);
// const [validator,setValidator]=useState(false);
//     let l = true;


    const validator = () => {
        // console.log('llll' + l);
        const owner = currentUser ? currentUser.phoneNumber : null;
        const ownerId = currentUser ? currentUser.uid : null;
        let l=true;
        console.log(l);
        l = !(newUserIdCollection.includes(ownerId));
        console.log(l);
        console.log(newUser);
        if (l && newUser && owner!==null) {
            const newUsers = {
                id: uuidv4(),
                owner,
                ownerId,
                createdAt: new Date(),
                coin:+coin
            }
            refNewUser
                .doc(newUsers.id)
                .set(newUsers)
                .catch((err) => {
                    console.log(err);
                })
        } else {
            return console.log("Shanu nhi chala");
        }
    }





    useEffect(() => {
        // checking();
        console.log('ran first time');
        // console.log(newUserIdCollection);
        // console.log(newUserIdCollection+" and "+ownerId);
        // console.log(newUserIdCollection.includes(ownerId));
        validator();

    }, [newUserIdCollection])


    // AddnewUsers();

return <></>
}
export default CreateNewProfile;
