
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Web from './components/Web'
import Modeling from './components/Modeling'
import Home from './components/Home'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'

function App() {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const [menu, setMenu] = useState(false);
  const store = { clicked, setClicked, ready, setReady, menu, setMenu}

  return (
    <>
      <Router>
        <Menu {...store} />
        <Header {...store} />
        <Switch>
          <Route exact path="/">
            <Home {...store} />
          </Route>
          <Route exact path="/about">
            <About {...store} />
          </Route>
          <Route exact path="/web">
            <Web {...store} />
          </Route>
          <Route exact path="/modeling">
            <Modeling {...store} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
