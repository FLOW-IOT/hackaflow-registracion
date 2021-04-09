import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PortalScreen from "./screens/PortalScreen";
import STVScreen from "./screens/STVScreen";

function App() {
  return (
    <div className="bg-black h-screen">
      <Router>
        <Switch>
          <Route path="/portal">
            <PortalScreen />
          </Route>
          <Route path="/stv">
            <STVScreen />
          </Route>
          <Route exact path="/">
            <Redirect to="/stv" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
