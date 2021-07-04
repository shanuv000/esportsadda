import React, { useState, useEffect, createContext } from "react";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";
import {sendMessageToUser} from '../admin/SendPassword';
export const FireContext = createContext();
export const FireProvider = ({ children }) => {
  const [pubg, setPubg] = useState([]);
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [gameId, setGameId] = useState(0);
  const ref = firebase.firestore().collection("bgmi");
  const refUser = firebase.firestore().collection("bgmi_user");
  const [newUser,setNewUser]=useState(false);
// const [gameUserandPass,setGameUserandPass]=useState([{}]);
const gameUserandPass=sendMessageToUser(currentUser,pubg,user);
    const history= useHistory();



    const authorize = () => {
    // let items = [];
    firebase.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        if(user){
            setNewUser(user.metadata.creationTime===user.metadata.lastSignInTime);
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


  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("you are Logged Out");
        history.push('/');
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getPubg();
    getUser();
    authorize();


  }, [sendMessageToUser]);
  // if (Loading) {
  //   return <h1 style={{ color: "orange" }}>Loading...</h1>;
  // }
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
        user,newUser,
          gameUserandPass

      }}
    >
      {children}
    </FireContext.Provider>
  );
};
