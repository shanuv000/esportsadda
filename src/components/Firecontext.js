import React, {useState, useEffect, createContext} from "react";
import firebase from "../firebase";
import {v4 as uuidv4} from "uuid";

import {useHistory} from "react-router-dom";
import {sendMessageToUser} from './SendPassword';

export const FireContext = createContext();
export const FireProvider = ({children}) => {
    const [pubg, setPubg] = useState([]);
    const [user, setUser] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const [getNewUser,setGetNewUser]=useState([]);
    const [gameId, setGameId] = useState(0);
    const ref = firebase.firestore().collection("bgmi");
    const refNewUser = firebase.firestore().collection("newuser");

    const refUser = firebase.firestore().collection("bgmi_user");
    const [newUser, setNewUser] = useState(false);
// const [gameUserandPass,setGameUserandPass]=useState([{}]);
    const gameUserandPass = sendMessageToUser(currentUser, pubg, user);
    const history = useHistory();

    const authorize = () => {
        // let items = [];
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            if (user) {
                setNewUser(user.metadata.creationTime === user.metadata.lastSignInTime);
            }
        });
    };

    function getPubg() {
        // setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
                // setLoading(false);
            });
            setPubg(items);
        });
    }

    function getUser() {
        refUser.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
                // setLoading(false);
            });
            setUser(items);
        });
    }

    function getNewUserValidation(){
        refNewUser.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
                // setLoading(false);
            });
            setGetNewUser(items);
        });

    }

    const AddnewUsers = () => {
        const owner = currentUser ? currentUser.phoneNumber : null;
        const ownerId = currentUser ? currentUser.uid : null;
        let validator = true;
        getNewUser.map((Newusers)=>{
            if(Newusers.ownerId===ownerId)
            {

                validator=false;
                console.log('Under if '+validator);
            }
        } );

        const newUsers = {
            id: uuidv4(), owner, ownerId, createdAt: new Date(),
        }
        //Validation
console.log(newUser && validator);
        if(newUser && validator)
        {

        refNewUser
            .doc(newUser.id)
            .set(newUsers)
            .catch((err) => {
                console.log(err);
            });
        }
    }


    // AddnewUsers();


    const logout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                alert("you are Logged Out");
                history.push('/');
            })
            .catch((error) => {
            });
    };

    // AddnewUsers();
    useEffect(() => {
        getPubg();
        getUser();
        authorize();
        getNewUserValidation();
        // AddnewUsers();

    }, []);
    return (
        <FireContext.Provider
            value={{
                setGameId,
                gameId,
                pubg,
                currentUser,
                ref,
                refUser,
                logout,

                user, newUser, gameUserandPass,
                AddnewUsers,
                getNewUser,
            }}
        >
            {children}
        </FireContext.Provider>
    );
};
