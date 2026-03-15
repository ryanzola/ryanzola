
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Web from './components/Web'
import Modeling from './components/Modeling'
import Home from './components/Home'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'
import NFTPage from './components/NFT';
import usePageTitle from './hooks/usePageTitle';

import './App.css'

function AppRoutes({ store }) {
  usePageTitle()

  return (
    <Routes>
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
  )
}

function App() {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const [menu, setMenu] = useState(false);
  const store = { clicked, setClicked, ready, setReady, menu, setMenu }

  return (
    <div className="App">
      <Router>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold">
          Skip to content
        </a>
        <Menu {...store} />
        <Header {...store} />
        <main id="main-content" className="h-full">
          <AppRoutes store={store} />
        </main>
      </Router>
    </div>
  );
}

export default App;
