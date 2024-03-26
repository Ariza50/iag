import './App.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Todo} from "./modules/Todo/Todo.jsx";
import {Api} from "./modules/Api/Api.jsx";

function App() {

  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"/todo"}>ToDo</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={"/api"}>Api</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/api" component={Api} />
        </Switch>
      </Router>
  )
}

export default App
