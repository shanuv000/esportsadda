import "./App.css";
import Header from "./components/Header";
// import Card from "./components/Card";
import PubgForm from "./admin/Pubgform";
import { Switch, Route } from "react-router-dom";
import PubgTable from "./admin/PubgTable";
import Firebaseotp from "./Firebaseotp";
import Demo from "./Demo";
import Home from "./pages/Home";
import User from "./pages/User";
import UserTable from "./admin/userTable";
import Warning from "./admin/Warning";
import Modals from "./components/Modal";
import CoverPage from "./pages/CoverPage";
function App() {
  return (
    <div className="App">
       {/*<Header backColor='danger'/>*/}
       {/*<Warning />*/}
      <Switch>
        <Route path="/" exact>
          {/* <Home /> */}
          <CoverPage />
        </Route>
        <Route path="/pubgform" exact>
          <PubgForm />
        </Route>
        <Route path="/pubgtable" exact>
          <PubgTable />
        </Route>
        <Route path="/otp" exact>
          <Firebaseotp />
        </Route>{" "}
        <Route path="/demo" exact>
          <Demo />
        </Route>
        <Route path="/user" exact>
          <User />
        </Route>{" "}
        <Route path="/usertable" exact>
          <UserTable />
        </Route>
        <Route path="/modal" exact>
          <Modals />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
