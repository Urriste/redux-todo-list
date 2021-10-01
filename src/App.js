import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
