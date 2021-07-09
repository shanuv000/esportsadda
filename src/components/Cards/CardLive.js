import React, {useContext} from "react";
import { IconButton } from "@material-ui/core";
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
// import { FireContext } from "./Firecontext";
import Modal from '../Modal';
import "./Card.css";
const CardLive = (props) => {
    // const { currentUser } = useContext(FireContext);

    return (
        <>
            <div className="col-sm-12  mt-3 d-flex justify-content-center ">
                <div class="card sm-12" style={{ width: "30rem" }}>
                    <img className="img-fluid" src={props.images} alt="Card  cap" />

                    <div class="card-body">
                        <div className="row mb-3 d-flex justify-content-center">
                            <div className="col-sm-12 col ">
                                <h3 className="text-center">{props.gameName} #{props.gameId}</h3>
                                <h6 class="text-muted text-center">{props.scheduledDate}</h6>
                            </div>
                        </div>
                        <div className="row mb-1 text-center">
                            <div className="col-sm-4 col">
                                <h6 className="text-muted text-center">PRIZE POOL</h6>
                                <h3 className="text-center">
                                    <IconButton />
                                    ₹{props.pricePool}
                                </h3>
                            </div>
                            <div className="col-sm-4 col">
                                <h6 className="text-muted text-center">PER KILL</h6>
                                <h3 className="text-center">₹{props.perkill}</h3>
                            </div>
                            <div className="col-sm-4 col">
                                <h6 className="text-muted text-center">ENTRY FEE</h6>

                                <h3 className="text-center"><MonetizationOnRoundedIcon/>{props.entryFee}</h3>
                            </div>
                        </div>{" "}
                        <div className="row mb-1">
                            <div className="col-sm-4 col">
                                <h6 className="text-muted text-center">TYPE</h6>
                                <h3 className="text-center text-capitalize">
                                    {props.teamType}
                                </h3>
                            </div>
                            <div className="col-sm-4 col">
                                <h6 className="text-muted text-center">VERSION</h6>
                                <h3 className="text-center text-capitalize">
                                    {props.pubgVersion}
                                </h3>
                            </div>
                            <div className="col-sm-4 col">
                                <h6 className="text-muted text-center">MAP</h6>
                                <h3 className="text-center text-capitalize">{props.map}</h3>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col col-sm-12">

                                <a
                                        className={`btn  btn-block  btn-danger`}
                                        href={props.youtube}
                                        target="_blank"
                                >
                                    Watch Live
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardLive;
