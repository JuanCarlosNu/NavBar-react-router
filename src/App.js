import React from "react";
import "./App.css";
import ItemList from "./components/ItemsList/ItemList";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./components/About/About";
import Jobs from "./components/Jobs/Jobs";
import Blog from "./components/Blog/Blog";
import ItemDetails from "./components/ItemDetails/ItemDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <React.Fragment>
        <Switch>
          <Route path="/home" exact>
            <ItemList />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/jobs" exact>
            <Jobs />
          </Route>
          <Route path="/courses" exact>
            <ItemList />
          </Route>
          <Route path="/courses/:id" component={ItemDetails} exact />
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Redirect from="/" to="/courses" />

          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
