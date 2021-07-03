import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import "./PubgForm.css";
import "date-fns";
import { useRef } from "react";
import { FireContext } from "../components/Firecontext";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const Pubgform = () => {
  // Date And Time Picker

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: '2rem',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles();
  // ---------------------
  const history = useHistory();
  const { ref } = useContext(FireContext);
  const focRef = useRef(null);
  const [entryFee, setEntryFee] = useState("11");
  const [pricePool, setPricepool] = useState("100");
  const [perkill, setPerKill] = useState("8");
  const [title, setTitle] = useState("");
  const [gameId, setGameId] = useState("");
  const [description, setdesc] = useState("This is Pubg Tournament");
  const [pubgVersion, setPubgversion] = useState("");
  const [teamType, setTeamtype] = useState("");
  const [map, setMap] = useState("");
  const [totalSpots, setTotalspots] = useState("100");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedtime] = useState(null);
const match_condition=0;
  // const [gameValidation, setGameValidation] = useState(false);
  // let shanu = [];
  // let neha = [];
  // shanu = pubg.map((p) => p.gameId);
  // neha = shanu.map((ps) => ps.map);
  // console.log(neha);

  function AddGame() {
    // e.preventDefault();
    const newBgmi = {
      id: uuidv4(),
      description,
      entryFee,
      gameId,
      map,
      perkill,
      pricePool,
      pubgVersion,
      teamType,
      totalSpots,
      title,
      createdAt: new Date(),
      selectedDate,
      selectedTime,
      match_condition
    };

    ref
      .doc(newBgmi.id)
      .set(newBgmi)
      .catch((err) => {
        console.log(err);
      });
    history.push("/");
  }


  return (
    <>
      <div className="back__backgroud">
        <div className="container mb-5">
          <h1 className="text-center ">Pubg Form</h1>
          {/*<label className="mt-3" for="exampleInputEmail1">*/}
          {/*  Game ID*/}
          {/*</label>*/}
          {/*/!*<input*!/*/}
          {/*/!*  type="name"*!/*/}
          {/*/!*  // onChange={gamaIdValid}*!/*/}
          {/*/!*  ref={focRef}*!/*/}
          {/*/!*  class="form-control"*!/*/}
          {/*/!*  id="exampleInputEmail1"*!/*/}
          {/*/!*  aria-describedby="emailHelp"*!/*/}
          {/*/!*  placeholder="Game ID"*!/*/}
          {/*/!*  onChange={(e) => setGameId(e.target.value)}*!/*/}
          {/*/!*></input>*!/*/}
          <TextField className={'mt-3'}
                     id="standard-textarea"
                     ref={focRef}
                     label="Game ID"
                     placeholder="Game ID"
                     multiline
                     onChange={(e) => setGameId(e.target.value)}
          />



          {/*<label className="mt-3" for="exampleInputEmail1">*/}
          {/*  Title*/}
          {/*</label>*/}
          {/*<input*/}
          {/*  type="name"*/}
          {/*  class="form-control"*/}
          {/*  id="exampleInputEmail1"*/}
          {/*  aria-describedby="emailHelp"*/}
          {/*  placeholder="Title"*/}
          {/*  onChange={(e) => setTitle(e.target.value)}*/}
          {/*></input>*/}
          <br/>
          <TextField className={'mt-3'}
                     id="standard-textarea"
                     label="Title"
                     placeholder="Title"
                     multiline
                     onChange={(e) => setTitle(e.target.value)}

          />

          <form className={classes.container} noValidate>

            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2021-06-18T10:00"
              className={classes.textField}
              onChange={(times) => setSelectedDate(times.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          {console.log(selectedDate)}
          <label className="mt-3" for="exampleInputEmail1">
            Per Kill
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setPerKill(e.target.value)}
          ></input>{" "}
          <label className="mt-3" for="exampleInputEmail1">
            Price Pool
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Price Pool"
            onChange={(e) => setPricepool(e.target.value)}
          ></input>
          <label className="mt-3" for="exampleInputEmail1">
            Total Spots
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Total Spots"
            onChange={(e) => setTotalspots(e.target.value)}
          ></input>
          <label className="mt-3" for="exampleInputEmail1">
            Entry Fee
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Entry Fee"
            onChange={(e) => setEntryFee(e.target.value)}
          ></input>
          <label className="mt-3" for="exampleInputEmail1">
            PUBG VERSION
          </label>
          <select
            class="form-control "
            onChange={(e) => setPubgversion(e.target.value)}
          >
            <option>SELECT PUBG VERSION</option>
            <option value="tpp">TPP</option>
            <option value="fpp">FPP</option>
          </select>
          <label className="mt-3" for="exampleInputEmail1">
            TEAM TYPE
          </label>
          <select
            class="form-control "
            onChange={(e) => setTeamtype(e.target.value)}
          >
            <option>SELECT TEAM TYPE</option>
            <option value="solo">SOLO</option>
            <option value="duo">DUO</option>
            <option value="squad">SQUAD</option>
          </select>
          <label className="mt-3" for="exampleInputEmail1">
            MAP
          </label>
          <select
            class="form-control "
            onChange={(e) => setMap(e.target.value)}
          >
            <option> SELECT MAP</option>
            <option value="erangel">Erangel</option>
            <option value="miramar"> Miramar</option>
            <option value="vikendi">Vikendi</option>
          </select>
          <div class="form-group mt-3">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              onChange={(e) => setdesc(e.target.value)}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button onClick={() => AddGame()} class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>{" "}
    </>
  );
};

export default Pubgform;
