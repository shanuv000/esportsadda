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
  const currentUserId = currentUser ? currentUser.uid : null;

const handleCardValidation=(pubgGameId)=>{
    let p =false;
    user.map((user)=>{
        if(user.owner.includes(currentUserId)&&user.gameId.includes(pubgGameId)){
        // console.log(user.gameId)
        p=true;
    }
})
return p;
}

const handleCardDate = (pubgDate)=>{
  let print=true;
  let d1 = new Date();
  let d2= new Date(pubgDate);
  let t1= d1.getTime();
  let t2 = d2.getTime();
  console.log(t2);
  let time=t2>=t1;
  print=d2>=d1;
  if(d2===d1)
  {
    time=t2>=t1;
    print=time;
  }
   return print;
}


const cards = pubg.map((pubg) => {
       const handleButtonValidation= handleCardValidation(pubg.gameId);
     const print=handleCardDate(pubg.selectedDate);


        return print?<Card
            key={pubg.id}
            createdAt={moment(pubg.createdAt.toDate()).calendar()}
            scheduledDate={moment(pubg.selectedDate).calendar()}
            images={images}
            gameId={pubg.gameId}
            pricePool={pubg.pricePool}
            perkill={pubg.perkill}
            buttonColor={handleButtonValidation?'success':'danger'}
            buttonText={handleButtonValidation?'Already Joined!':'Not Joined?'}
            entryFee={pubg.entryFee}
            teamType={pubg.teamType}
            pubgVersion={pubg.pubgVersion}
            map={pubg.map}
            buttonHandleDisabled={handleButtonValidation}
            // gamesssDemo = {setNowGameId(pubg.gameId)}
            totalSpots={pubg.totalSpots}
            logss={() => logss(pubg.gameId)}

        />:null;

        // setNowGameId(pubg.gameId)
      }
  )


  useEffect(() => {
    const timer= setTimeout(() => {
    setHandleAlert(false);
  }, 12000);
    return () => clearTimeout(timer);
  },[handleAlert])

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
