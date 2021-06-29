import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import { FireContext } from "../components/Firecontext";
import Card from "../components/Card";
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';


import moment from "moment";
// import Modal from "../components/Modal";
const Home = () => {
  const images =
    "https://www.pubglitepc.co/wp-content/uploads/2021/05/PUBG-Mobile-Tencent-Ban-768x432.jpg";
  const history = useHistory();
  const { pubg, setGameId,currentUser } = useContext(FireContext);
  const [handleAlert,setHandleAlert]=useState(false);

  // const userValidation = currentUser ? <Modal /> : history.push("/user");
  // console.log(currentUser ? currentUser.uid : "not logged in");
  // const [stateValue, setStateValue] = value2;
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

          {pubg.map((pubg) => (
            <Card
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
              totalSpots={pubg.totalSpots}
              logss={() => logss(pubg.gameId)}
            />
          ))}
          <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
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
