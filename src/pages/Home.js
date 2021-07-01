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

  const images =
    "https://www.pubglitepc.co/wp-content/uploads/2021/05/PUBG-Mobile-Tencent-Ban-768x432.jpg";
  const history = useHistory();
  const { pubg,user, setGameId,currentUser,refUser } = useContext(FireContext);
  const [handleAlert,setHandleAlert]=useState(false);
  const [gameEntryValidation,setGameEntryValidation]=useState([]);
console.log(gameEntryValidation);
  const currentUserId = currentUser ? currentUser.uid : null;

  const usersValidation=()=>{
    const validatedBooleansItems= [];
  pubg.filter((pubg)=>{
    user.filter((users)=>{

      const validateUser=users.owner.includes(currentUserId);
      const validateGameId=pubg.gameId.includes(users.gameId);
      const totalValidation =
          validateUser && validateGameId
              // 'shanu true-> '+users.gameId+' -- '+pubg.gameId+' -- '+validateUser:
              // 'vaibhav false=> '+users.gameId+' -- '+pubg.gameId+' -- '+validateUser;
      validatedBooleansItems.push(totalValidation)
      // return console.log(validatedBooleansItems);

      // users.owner.includes(currentUserId)&&pubg.gameId.includes(users.gameId)?'shanu':'nn';
// return console.log(users.owner.includes(currentUserId)?users.gameId.includes(pubg.gameId):false);




      // console.log(pubg.gameId.includes(users.gameId))
  })
  })
    // console.log(validatedBooleansItems);
    setGameEntryValidation(validatedBooleansItems);
}






  useEffect(() => {
    usersValidation();
    // usersValidation();

    // usergameValidation();
    //Timer
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

          {pubg.map((pubg) => {

              return <Card
                  key={pubg.id}

                  createdAt={moment(pubg.createdAt.toDate()).calendar()}
                  // scheduledDate={moment(
                  //   pubg.selectedDate + "T" + pubg.selectedTime
                  // ).format("LL")}
                  scheduledDate={moment(pubg.selectedDate).calendar()}
                  // scheduledTime={moment(
                  //   pubg.selectedDate + "T" + pubg.selectedTime
                  // ).format("LT")}
                  images={images}
                  gameId={pubg.gameId}
                  pricePool={pubg.pricePool}
                  perkill={pubg.perkill}
                  entryFee={pubg.entryFee}
                  teamType={pubg.teamType}
                  pubgVersion={pubg.pubgVersion}
                  map={pubg.map}
                  buttonHandleDisabled={false}
                  // gamesssDemo = {setNowGameId(pubg.gameId)}
                  totalSpots={pubg.totalSpots}
                  logss={() => logss(pubg.gameId)}

              />
            // setNowGameId(pubg.gameId)
              }
          )}
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
