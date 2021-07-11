import React, {useState, useContext, useEffect} from "react";
import {FireContext} from "../components/Firecontext";
import referralCodeGenerator from 'referral-code-generator';
// import {sendMessageToUser} from '../components/SendPassword';
import {v4 as uuidv4} from "uuid";

const CreateNewProfile = () => {
    const {currentUser, newUser, refNewUser, newUserIdCollection} = useContext(FireContext);
    const [coin, setCoin] = useState(100);
    const [referral, setReferral] = useState(referralCodeGenerator.alphaNumeric('uppercase', 3, 1));
// const [validator,setValidator]=useState(false);
    const [referralValidation, setReferralValidation] = useState(0);
//     let l = true;


    const validator = () => {
        // console.log('llll' + l);
        const owner = currentUser ? currentUser.phoneNumber : null;
        const ownerId = currentUser ? currentUser.uid : null;
        let l = true;
        console.log(l);
        l = !(newUserIdCollection.includes(ownerId));
        console.log(l);
        console.log(newUser);

        if (l && newUser && owner !== null) {

            const newUsers = {
                id: uuidv4(),
                owner,
                ownerId,
                createdAt: new Date(),
                coin: +coin,
                referral,
                referralValidation: +referralValidation
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

        validator();

    }, [newUserIdCollection])


    // AddnewUsers();

    return <></>
}
export default CreateNewProfile;
