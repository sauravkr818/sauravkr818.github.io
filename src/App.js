import Home from "./Components/Home/Home";
import {Route, Switch, useLocation} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
        <Switch>
        <Route path="/">
            <Home />
        </Route>
        </Switch>
        </div>
    );
}

export default App;
