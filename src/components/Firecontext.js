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
    // const [gameId, setGameId] = useState(0);
    const ref = firebase.firestore().collection("bgmi");
    const refNewUser = firebase.firestore().collection("newuser");
    const refUser = firebase.firestore().collection("bgmi_user");
    const [newUser, setNewUser] = useState(false);
// const [gameUserandPass,setGameUserandPass]=useState([{}]);
    const gameUserandPass = sendMessageToUser(currentUser, pubg, user);
    const history = useHistory();
    const [newUserIdCollection, setnewUserIdCollection] = useState([]);
    const [newUserCollection, setNewUserCollection] = useState([]);
    const [Loading,setLoading] =useState(true);
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

    function getNewUserValidation() {
        refNewUser.onSnapshot((querySnapshot) => {
            const items = [];
            const items2 = [];
            querySnapshot.forEach((doc) => {
                items2.push(doc.data());
                items.push(doc.data().ownerId);
            });
            setNewUserCollection(items2);
            setnewUserIdCollection(items);
        });
    }


    const logout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {

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
setLoading(false);

    }, []);

    if(Loading){
        return <h1>Shanu is Great</h1>;
    }
    return (
        <FireContext.Provider
            value={{
                // setGameId,
                // gameId,
                pubg,
                currentUser,
                ref,
                refUser,
                logout,
                user,
                newUser,
                gameUserandPass,
                refNewUser,
                newUserIdCollection,
                newUserCollection

            }}
        >
            {children}
        </FireContext.Provider>
    );
};
