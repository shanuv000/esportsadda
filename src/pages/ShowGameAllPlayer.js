import {useParams} from "react-router-dom";
import {useContext} from "react";
import {FireContext} from "../components/Firecontext";

const ShowGameAllPlayer = () => {
    const {players} = useParams();
    const items = [];
    const {user} = useContext(FireContext);
user.filter((game)=>game.gameId===players).map((playerName)=>{
    items.push(playerName.gameName);
})
console.log(items);
    return <>
        <div className="container">
        {/*<h1 className={'text-center font-weight-bold'}>Player</h1>*/}
        <table className="table">
            <thead>
            <tr>
                <th scope="col"><h1 className={'text-center font-weight-bold'}>Player</h1></th>
            </tr>
            </thead>
            <tbody>
            {items.map((playerName)=>
                <tr>
                    <td><h3>{playerName}</h3></td>
                </tr>
            )}


            </tbody>
        </table></div>
    </>
}
export default ShowGameAllPlayer;