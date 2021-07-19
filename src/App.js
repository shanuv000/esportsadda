import "./App.css";
import Header from "./components/Header";
// import Card from "./components/Card";
// import PubgForm from "./admin/Pubgform";
import {Switch, Route} from "react-router-dom";
// import PubgTable from "./admin/PubgTable";
import Firebaseotp from "./Firebaseotp";
import MatchUpcoming from "./pages/MatchUpcoming";
import Usersform from "./pages/Usersform";
import Contact from './pages/Contact';
import SocialMediaIcon from './components/SocialMediaIcon';

// import UserTable from "./admin/userTable";
import Warning from "./admin/Warning";
import Modals from "./components/Modal";
import CoverPage from "./pages/CoverPage";
import Tournament from './pages/Tournament';
import FirebaseNewUser from "./admin/FirebaseNewUser";
import CreateNewProfile from "./admin/CreateNewProfile";
import Profile from "./components/Profile/Profile";
import ShowGameAllPlayer from "./pages/ShowGameAllPlayer";

function App() {

    return (
        <div className="App">
            <Header backColor='danger'/>
            {/*<Warning />*/}
            <Switch>
                <Route path="/" exact>
                    {/* <MatchUpcoming /> */}
                    <CoverPage/>
                </Route>
                <Route path="/cards" exact>
                    <MatchUpcoming/>
                </Route>
                {/*<Route path="/otp" exact>*/}
                {/*  <Firebaseotp />*/}
                {/*</Route>*/}
                {/*<Route path="/demo" exact>*/}
                {/*  <Demo />*/}
                {/*</Route>*/}
                <Route path="/tournament" exact>
                    <Tournament/>
                </Route>
                {/*//*/}

                <Route path="/tournament/:game_Id">
                    <Usersform/>
                </Route>
                <Route path="/cards/:players" component={ShowGameAllPlayer}/>
                <Route path="/modal" exact>
                    <Modals/>
                </Route>
                <Route path='/new'>
                    <FirebaseNewUser/>
                </Route>
                <Route path='/profile' component={Profile}/>
                <Route path='/tab'><CreateNewProfile/></Route>
                <Route path='/contact' component={Contact}/>
            </Switch>
            <SocialMediaIcon backColor={'bg-dark'}/>
        </div>
    );
}

export default App;
