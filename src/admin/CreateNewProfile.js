import React, {useState, useContext, useEffect} from "react";
import {FireContext} from "../components/Firecontext";
import referralCodeGenerator from 'referral-code-generator';
// import {sendMessageToUser} from '../components/SendPassword';
import {v4 as uuidv4} from "uuid";

// export const validator = (currentUser, newUser, newUserCollection, coin, referral, referralValidation, refNewUser) => {
//     const owner = currentUser ? currentUser.phoneNumber : null;
//     const ownerId = currentUser ? currentUser.uid : null;
//
//     console.log(newUserCollection);
//     const l = newUserCollection.find(e => e.ownerId === ownerId);
//     console.log(l);
//     console.log(newUser);
//
//     if (!l && newUser && owner !== null) {
//         const newUsers = {
//             id: uuidv4(),
//             owner,
//             ownerId,
//             createdAt: new Date(),
//             coin: +coin,
//             referral,
//             referralValidation: +referralValidation
//         }
//         refNewUser
//             .doc(newUsers.id)
//             .set(newUsers)
//             .catch((err) => {
//                 console.log(err);
//             })
//     } else {
//         return null;
//     }
// }


const CreateNewProfile = () => {
    const {currentUser, newUser, refNewUser, newUserIdCollection, newUserCollection} = useContext(FireContext);
    const [coin, setCoin] = useState(100);
    const [referral, setReferral] = useState(referralCodeGenerator.alphaNumeric('uppercase', 3, 1));
    // const [validator, setValidator] = useState(false);
    const [referralValidation, setReferralValidation] = useState(0);
    let l = true;

    const Validator = () => {
        const owner = currentUser ? currentUser.phoneNumber : null;
        const ownerId = currentUser ? currentUser.uid : null;
        console.log(newUserCollection);
        const l = newUserCollection.find(e => e.ownerId === ownerId);
        console.log(l);
        console.log(newUser);

        if (!l && newUser && owner !== null) {
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
            return null;
        }
    }


    useEffect(() => {

        Validator();

    }, [currentUser])


    // AddnewUsers();

    return <></>
}
export default CreateNewProfile;
