
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Web from './components/Web'
import Modeling from './components/Modeling'
import Home from './components/Home'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'
import NFTPage from './components/NFT';
import Darkness from './components/Darkness'
import Game from './components/Game/Game';

import './App.css'

function App() {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const [menu, setMenu] = useState(false);
  const store = { clicked, setClicked, ready, setReady, menu, setMenu }

  return (
    <div className="App">
      <Router>
        <Menu {...store} />
        <Header {...store} />
        <Routes>
          <Route
            path="/darkness"
            element={ 
              <Darkness {...store } />
            }
          />
          <Route
            path="/game"
            element={ 
              <Game {...store } />
            }
          />
          <Route
            path="/nft"
            element={ 
              <NFTPage {...store } />
            }
          />
          <Route
            path="/modeling"
            element={
              <Modeling {...store} />
            }
          />
          <Route
            path="/web"
            element={
              <Web {...store} />
            }
          />
          <Route
            path="/about"
            element={
              <About {...store} />
            }
          />
          <Route
            path="/"
            element={
              <Home {...store} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
