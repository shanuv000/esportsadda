import React, {useContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {FireContext} from "../components/Firecontext";
import Card from "../components/Cards/Card";
import {makeStyles} from '@material-ui/core/styles';
import {Alert} from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

import moment from "moment";
// import firebase from "../firebase";
import {handleGameType} from './MatchLive';
const MatchUpcoming = () => {

    // const images =
    //   "https://www.pubglitepc.co/wp-content/uploads/2021/05/PUBG-Mobile-Tencent-Ban-768x432.jpg";
    const images = 'https://assets.mspimages.in/wp-content/uploads/2021/06/Battleground-Mobile-India-2.jpg';
    const history = useHistory();
    const {pubg, user, setGameId, currentUser, ref} = useContext(FireContext);
    const [handleAlert, setHandleAlert] = useState(false);
    const currentUserId = currentUser ? currentUser.uid : null;

    const handleCardValidation = (pubgGameId) => {
        let p = false;
        user.map((user) => {
            if (user.owner.includes(currentUserId) && user.gameId.includes(pubgGameId)) {
                // console.log(user.gameId)
                p = true;
            }
        })
        return p;
    }
    const noMatchAlert = (
        <div className={"d-flex justify-content-center col-sm-12"}>
            <div className="p1 alert alert-success text-center mt-4 text-align-center " role="alert">
                <h4 className="alert-heading">Not any Matches Right Now!</h4>
                <hr/>

                <p className="mb-0">You Can Enjoy Our Gaming <a href={"https://www.youtube.com/watch?v=GrabczXGVLY"}
                                                                target="_blank">Videos Here!</a></p>

            </div>
        </div>);


    const handleCardDate = (pubgDate, pubg) => {
        let print = true;
        let d1 = new Date();
        let d2 = new Date(pubgDate);
        let t1 = d1.getTime();
        let t2 = d2.getTime();
        console.log(t2);
        let time = t2 >= t1;
        print = d2 >= d1;
        if (d2 === d1) {
            time = t2 >= t1;
            print = time;
        }
        // const upcoming = print ? 1 : 2;
        // console.log('Upcoming-> ' + upcoming)
        // updateUpcomingMatch(pubg, upcoming)
        return print;
    }

    const updateUpcomingMatch = (pubg, upcoming) => {
        // const upcoming=1;
        const updateMatch = {match_condition: upcoming};
        ref
            .doc(pubg.id)
            .update(updateMatch)
            .catch((err) => {
                console.log(err);
            });
    }

    let count = 0;
    let cards = pubg.map((pubg) => {
            handleCardDate(pubg.selectedDate, pubg);
        let GamesType=handleGameType(pubg);
            const handleButtonValidation = handleCardValidation(pubg.gameId);
            const print = pubg.match_condition === 1;
            count = print ? (count + 1) : count;
            return print ? <Card
                key={pubg.id}
                createdAt={moment(pubg.createdAt.toDate()).calendar()}
                scheduledDate={moment(pubg.selectedDate).calendar()}
                images={GamesType.images}
                gameId={pubg.gameId}
                pricePool={pubg.pricePool}
                gameName={GamesType.names}

                perkill={pubg.perkill}
                buttonColor={handleButtonValidation ? 'success' : 'danger'}
                buttonText={handleButtonValidation ? 'Already Joined!' : 'Not Joined?'}
                entryFee={pubg.entryFee}
                teamType={pubg.teamType}
                pubgVersion={pubg.pubgVersion}
                map={pubg.map}
                buttonHandleDisabled={handleButtonValidation}
                // gamesssDemo = {setNowGameId(pubg.gameId)}
                totalSpots={pubg.totalSpots}
                logss={() => logss(pubg.gameId)}

            /> : null;

        }
    )

    cards = count === 0 ?
        noMatchAlert
        : cards;

    useEffect(() => {
        const timer = setTimeout(() => {
            setHandleAlert(false);
        }, 12000);
        return () => clearTimeout(timer);
    }, [handleAlert])

    const logss = (game) => {
        setGameId(game);
        if (!currentUser) {
            setHandleAlert(true);
            setOpen(true);   //For Snack Bar
        } else {
            history.push('/user')
        }
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

    //
    // const useStyles = makeStyles((theme) => ({
    //   root: {
    //     width: '100%',
    //     '& > * + *': {
    //       marginTop: theme.spacing(2),
    //     },
    //   },
    // }));
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    let c = [];
    return (
        <>
            {handleAlert ? <Alert severity="error">
                <h4>Please Login Before Join — <strong>Login In</strong></h4>
            </Alert> : null}

            <div
                className="container-fluid back__back "
                style={{minHeight: "745px"}}
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

export default MatchUpcoming;
