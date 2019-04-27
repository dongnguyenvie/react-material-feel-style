import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {login} from './components/test/TestComponent'
import Routes from './Routes'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/testa" component={login} />
          <Route path={"/"} component={Routes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
