import React, { useContext } from "react";
import { FireContext } from "../components/Firecontext";
import moment from "moment";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';




const PubgTable = () => {

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const { pubg, ref } = useContext(FireContext);
  let i = 0;
  const ar = [21, 11, 34, 1, 434, 212, 43];
  console.log(ar.sort((a, b) => a - b));
  //Delete Function
  function DeletePubg(newBgmi) {
    ref

      .doc(newBgmi.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  }

  pubg.sort(function (a, b) {
    a = new Date(a.selectedDate);
    b = new Date(b.selectedDate);
    return a < b ? -1 : a > b ? 1 : 0;
  });

  // arr.map((p) => console.log(p));

  return (
    <>
      <div className="container back__backgroud">
        <h1 className="text-center font-weight-bold mt-3">
          {/* BGMI Table {moment(showDate).format("MMMM Do YYYY, h:mm:ss a")} */}
          BGMI Table
        </h1>
        <div className="row">
          <div className="col  col-sm">
            <table
              class="table table-responsive table-striped "
              style={{ color: "white" }}
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Game ID</th>
                  <th scope="col">Map</th>
                  <th scope="col">Total Spots</th>
                  <th scope="col">Price Pool</th>
                  <th scope="col">Per Kill</th>
                  <th scope="col">Pubg Version</th>
                  <th scope="col">Team Type</th>
                  <th scope="col">Entry Fee</th>
                  <th scope="col">Date Sceduled</th>
                  {/* <th scope="col">Time Sceduled</th> */}
                  <th scope="col">Created At</th>

                  <th scope="col">Delete</th>
                  {/* <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody>
                {pubg.map((pubg) => (
                  <tr key={pubg.id}>
                    <th scope="row">{(i = i + 1)}</th>
                    <td>{pubg.gameId}</td>
                    <td className="text-capitalize">{pubg.map}</td>
                    <td>{pubg.totalSpots}</td>
                    <td>{pubg.pricePool}</td>
                    <td>{pubg.perkill}</td>
                    <td className="text-capitalize">{pubg.pubgVersion}</td>
                    <td className="text-capitalize">{pubg.teamType}</td>
                    <td>{pubg.entryFee}</td>
                    <td>{moment(pubg.selectedDate).format("LLL")}</td>
                    {/* <td>{pubg.selectedTime}</td> */}
                    <td>{moment(pubg.createdAt.toDate()).calendar()}</td>
                    <td>
                      {/*<button*/}
                      {/*  onClick={() => DeletePubg(pubg)}*/}
                      {/*  className="btn btn-danger"*/}
                      {/*>*/}
                      {/*  Delete*/}
                      {/*</button>*/}
                      <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => DeletePubg(pubg)}
                          className={classes.button}
                          endIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        {/* <h3 className="text-right">{i}</h3> */}
      </div>
    </>
  );
};

export default PubgTable;
