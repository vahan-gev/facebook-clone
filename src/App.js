import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Feed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
