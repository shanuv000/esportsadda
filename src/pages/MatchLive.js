import React, {useContext, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {FireContext} from "../components/Firecontext";
import CardLive from "../components/Cards/CardLive";
import {makeStyles} from '@material-ui/core/styles';
import {Alert} from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

import moment from "moment";
import firebase from "../firebase";

export  const handleGameType = (pubg) => {
    const gameType = +pubg.gameType;
    let images;
    let names;
    switch (gameType) {
        case  0:
            images='https://assets.mspimages.in/wp-content/uploads/2021/06/Battleground-Mobile-India-2.jpg';
            names = 'PUBG';
            return {images,names};
        case  1:
            images='https://play-lh.googleusercontent.com/Knw_hAyujH2PKqKtOEM5r8oJ_U-enugflHPpAMUr2T1R6Fp3AUPMYlLKm476BYwNt3Wl';
            names = 'Free Fire';
            return {images,names};
        case  2:
            images='https://images.indianexpress.com/2021/06/Valorant-Mobile.jpg';
            names = 'Valorant';
            return {images,names};


        default:
            return null;
    }
}

const MatchUpcoming = () => {

    // const images =
    //   "https://www.pubglitepc.co/wp-content/uploads/2021/05/PUBG-Mobile-Tencent-Ban-768x432.jpg";
    // const images = 'https://assets.mspimages.in/wp-content/uploads/2021/06/Battleground-Mobile-India-2.jpg';
    const history = useHistory();
    const {pubg, user, setGameId, currentUser, ref} = useContext(FireContext);
    const [handleAlert, setHandleAlert] = useState(false);
    const currentUserId = currentUser ? currentUser.uid : null;
    const youtube = 'https://www.youtube.com/channel/UC-WC4wck7kUhb9QwIDi5nzw/featured';

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
    // let images;
    // let names;
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
        const upcoming = print ? 1 : 0;
        console.log('Upcoming-> ' + upcoming)
        // updateUpcomingMatch(pubg,upcoming)

        return print;
    }






    const cards = pubg.map((pubg) => {
        let GamesType=handleGameType(pubg);

            handleCardDate(pubg.selectedDate, pubg);
            const handleButtonValidation = handleCardValidation(pubg.gameId);
            const print = pubg.match_condition === 2;

            return print ? <CardLive
                key={pubg.id}
                createdAt={moment(pubg.createdAt.toDate()).calendar()}
                scheduledDate={moment(pubg.selectedDate).calendar()}
                images={GamesType.images}
                gameId={pubg.gameId}
                pricePool={pubg.pricePool}
                gameName={GamesType.names}
                perkill={pubg.perkill}
                entryFee={pubg.entryFee}
                teamType={pubg.teamType}
                pubgVersion={pubg.pubgVersion}
                map={pubg.map}
                youtube={youtube}
                buttonHandleDisabled={handleButtonValidation}
                // gamesssDemo = {setNowGameId(pubg.gameId)}
                totalSpots={pubg.totalSpots}
                logss={() => logss(pubg.gameId)}

            /> : null;

            // setNowGameId(pubg.gameId)
        }
    )

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
