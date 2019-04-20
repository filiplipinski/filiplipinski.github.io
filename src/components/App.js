import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "../styles/App.css";
import "../styles/variables.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Div100vh from "react-div-100vh"
// I used Div100vh to repaired problem that 100vh is not a 100vh on mobiles because of browser bar...
import "../styles/media-queries.css";

class App extends Component {
  firstLoad = true;

  notFirstLoad = () => {
    this.firstLoad = false;
  };

  render() {
    return (
      <Router basename="/#">
        <div className="app">
          <Div100vh>
            <main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </main>
            <Route
              render={props => (
                <Logo
                  firstLoad={this.firstLoad}
                  notFirstLoad={this.notFirstLoad}
                  {...props}
                />
              )}
            />
            <Navigation />
          </Div100vh>
        </div>
      </Router>
    );
  }
}

export default App;
