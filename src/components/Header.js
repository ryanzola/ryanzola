import React from 'react';
import { Link } from "react-router-dom";

export default function Header({ clicked, menu, setMenu }) {
  const onToggleMenu = () => {
    setMenu(!menu);
    document.querySelector('body').classList.toggle('overflow-hidden')
  }


  const headerClassList = `${clicked ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'} ${!menu ? 'bg-blur' : null} fixed font-poppins text-white inset-x-0 top-0 flex items-center justify-between p-6 transition-opacity z-50`

  return (
    <header className={headerClassList}>
      <div className="font-bold tracking-wider">
        <Link to={"/"} onClick={() => menu ? onToggleMenu : null }>RYANZOLA</Link>
      </div>
      {/* logo */}

      <div className="block md:hidden">
        <button id="mobile-menu-button" onClick={onToggleMenu} className="focus:ring focus:ring-offset-1 focus:ring-gray-400 focus:ring-opacity-50 focus:outline-none rounded-sm" aria-controls="mobile-menu-tray">
          <svg className="w-8 h-8 focus:outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* hamburger */}

      <nav className="hidden md:flex" aria-label="Main Navigation">
        <ul className="flex gap-6">
          <li>
            <Link to={"/about"} className="hover:text-gray-400 transition ease-in duration-150">About</Link>
          </li>
          <li>
            <Link to={"/web"} className="hover:text-gray-400 transition ease-in duration-150">Web</Link>
          </li>
          <li>
            <Link to={"/modeling"} className="hover:text-gray-400 transition ease-in duration-150">3D Modeling</Link>
          </li>
          <li>
            <Link to={"/nft"} className="hover:text-gray-400 transition ease-in duration-150">NFT</Link>
          </li>
        </ul>
      </nav>
      {/* desktop nav */}
    </header>
  )
}