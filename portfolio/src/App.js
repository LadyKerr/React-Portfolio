import React from "react";
import { Switch, Route } from "react-router-dom";
//import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import ProjectList from "./components/Projects/ProjectList";
import Contact from "./components/Contact/Contact";
import "./app.css";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
