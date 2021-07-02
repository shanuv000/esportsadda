import React, {useContext, useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { FireContext } from "../components/Firecontext";
import Card from "../components/Card";
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

import moment from "moment";
import firebase from "../firebase";
// import Modal from "../components/Modal";
const Home = () => {

  // array1.filter(element => array2.includes(element));
  const images =
    "https://www.pubglitepc.co/wp-content/uploads/2021/05/PUBG-Mobile-Tencent-Ban-768x432.jpg";
  const history = useHistory();
  const { pubg,user, setGameId,currentUser,refUser } = useContext(FireContext);
  const [handleAlert,setHandleAlert]=useState(false);
  const [gameEntryValidation,setGameEntryValidation]=useState();
 const [gameInsert,setGameInsert]=useState([]);
  let i=0;
    const pubgGameId=[];
console.log(gameInsert);
// console.log(gameEntryValidation);
  const currentUserId = currentUser ? currentUser.uid : null;


  // const userValidation2 = ()=>
  // {
  //   refUser
  //       .where("owner", "==", currentUserId)
  //       .onSnapshot((querySnapshot) => {
  //         const items = [];
  //         querySnapshot.forEach((doc) => {
  //           items.push(doc.data());
  //         });
  //       });
  // }

  const usersValidation=(pro)=>{


    // --------------------------------------------------
//      const items=[];
//      user.map((game)=>{
//     // const validateUser=users.owner.includes(currentUserId);
//        const validateUser=game.owner.includes(currentUserId);
//        console.log(validateUser);
// if(validateUser){
//   items.push(game.gameId)
// }
//        // validateUser?items.push(game.gameId):false;
//     // items.push(game.gameId)
//      })
//
//     setGameInsert(items);

  //
  //
  //   const validatedBooleansItems= [];
  // pubg.map((pubg)=>{
  //   user.map((users)=>{
  //
  //     const validateUser=users.owner.includes(currentUserId);
  //     const validateGameId=pubg.gameId.includes(users.gameId);
  //     const totalValidation =
  //         validateUser && validateGameId
  //     validatedBooleansItems.push(totalValidation)
  // })
  // })
  //   setGameEntryValidation(validatedBooleansItems);


const items=[];
      pubgGameId.map((pubgGame)=>{

return refUser
        .where("owner","==",currentUserId)
        .where("gameId","==",pubgGame)
        .onSnapshot((querySnapshot) => {
            i=i+1;
            querySnapshot.forEach((doc) => {
                 const userGameId=doc.data().gameId;
                console.log(userGameId)
                // p.push('b');
               return items.push(userGameId)

            });
            // console.log((i)+'--items2=> '+items)

        });

})
      console.log(items.length);



// return items;
//     setGameInsert(items);
//       console.log('length-> '+(items.length));

}
// console.log('shanu is great '+ gameInsert);
//     console.log('length-> '+(items.length));


const cards = pubg.map((pubg) => {

        // pubgGameId.push(pubg.gameId);
let handleValidation=false;
      user.map((user)=>{
          if(user.owner.includes(currentUserId)&&user.gameId.includes(pubg.gameId)){
              console.log(user.gameId)
handleValidation=true;
          }
          })

  // usersValidation(pubg.gameId);

//     console.log('ssss');

      // console.log(v.length===1);
      // let  totalValidation=false;
  // const selectors =gameInsert.filter(element => pubg.gameId.includes(element));

// console.log('handleShift '+ handleSwitch());
//       console.log('gameInsert '+ gameInsert);
//       console.log('shanu '+!!gameInsert.filter(element => pubg.gameId.includes(element)))
        return <Card
            key={pubg.id}

            createdAt={moment(pubg.createdAt.toDate()).calendar()}
            scheduledDate={moment(pubg.selectedDate).calendar()}
            images={images}
            gameId={pubg.gameId}
            pricePool={pubg.pricePool}
            perkill={pubg.perkill}
            entryFee={pubg.entryFee}
            teamType={pubg.teamType}
            pubgVersion={pubg.pubgVersion}
            map={pubg.map}
            buttonHandleDisabled={handleValidation}
            // gamesssDemo = {setNowGameId(pubg.gameId)}
            totalSpots={pubg.totalSpots}
            logss={() => logss(pubg.gameId)}

        />

        // setNowGameId(pubg.gameId)
      }
  )





  useEffect(() => {
    // usersValidation();
    // usersValidation();

    // usergameValidation();
    //Timer
    //   usersValidation()
    const timer= setTimeout(() => {
    setHandleAlert(false);
  }, 12000);
    return () => clearTimeout(timer);
  },[])

  const logss = (game) => {
    setGameId(game);
    if(!currentUser)
    {
      setHandleAlert(true);
      setOpen(true);   //For Snack Bar
    }
    else
    {history.push('/user')}
    // console.log(game);
  };

  const handleClick = () => {
    setOpen(true);
  };

  pubg.sort((a, b) => {
    a = new Date(a.selectedDate);
    b = new Date(b.selectedDate);
    return a < b ? -1 : a > b ? 1 : 0;
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
let c=[];
  return (
    <>
      {handleAlert? <Alert  severity="error">
        <h4>Please Login Before Join — <strong>Login In</strong></h4>
      </Alert> :null}

      <div
        className="container-fluid back__back "
        style={{ minHeight: "745px" }}
      >
        <div className="row ">
          {cards}

          <Snackbar open={open} autoHideDuration={20000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              <h5>Login! before Proceeding!!</h5>
            </Alert>
          </Snackbar>
        </div>
      </div>
    </>
  );
};

export default Home;
