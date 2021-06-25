import React, { useContext } from "react";
import { FireContext } from "../components/Firecontext";
import moment from "moment";
const UserTable = () => {
  const { user, refUser } = useContext(FireContext);
  let i = 0;
  function DeleteUser(newBgmi) {
    refUser
      .doc(newBgmi.id)
      .delete()
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="container back__backgroud">
        <h1 className="text-center font-weight-bold mt-3">Pubg Table</h1>
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
                  <th scope="col">Game Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Available Coin</th>
                  <th scope="col">Created At</th>

                  <th scope="col">Delete</th>
                  {/* <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody>
                {user.map((user) => (
                  <tr key={user.id}>
                    <th scope="row">{(i = i + 1)}</th>
                    <td>{user.gameId}</td>
                    <td>{user.gameName}</td>
                    <td>{user.ownerPhone}</td>
                    <td>{user.coin}</td>
                    <td>{moment(user.createdAt.toDate()).calendar()}</td>
                    <td>
                      <button
                        onClick={() => DeleteUser(user)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
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

export default UserTable;
