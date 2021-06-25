import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FireContext } from "../components/Firecontext";
import Card from "../components/Card";
import moment from "moment";
import Modal from "../components/Modal";
import CoverPage from "./CoverPage";
const Home = () => {
  const images =
    "https://www.pubglitepc.co/wp-content/uploads/2021/05/PUBG-Mobile-Tencent-Ban-768x432.jpg";
  const history = useHistory();
  const { pubg, setGameId } = useContext(FireContext);
  // const userValidation = currentUser ? <Modal /> : history.push("/user");
  // console.log(currentUser ? currentUser.uid : "not logged in");
  // const [stateValue, setStateValue] = value2;

  const logss = (game) => {
    setGameId(game);
    history.push("/user");
    // console.log(game);
  };

  pubg.sort((a, b) => {
    a = new Date(a.selectedDate);
    b = new Date(b.selectedDate);
    return a < b ? -1 : a > b ? 1 : 0;
  });
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

export default Home;
