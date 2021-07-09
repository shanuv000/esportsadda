import firebase from "../firebase";
import { FireContext } from "../components/Firecontext";
import {useContext} from 'react';
// export const checker=()=>{
//     const { currentUser } = useContext(FireContext);
//     const lastSignedIn = currentUser.metadata.lastSignInTime;
//     const timesCreation = currentUser.metadata.creationTime;
//      const check = timesCreation===lastSignedIn;}

const FirebaseNewUser=()=>{
    const { newUser } = useContext(FireContext);
    let msg =newUser?'NEW USER':'NOT a NEW USER';
    return <h1 className={'text-center'}>{msg}</h1>
}
export default FirebaseNewUser;