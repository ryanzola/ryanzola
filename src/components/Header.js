import React from 'react';
import { Link } from "react-router-dom";
export default function Header({ clicked, menu, setMenu }) {
  function onToggleMenu() {
    setMenu(!menu);
    document.querySelector('body').classList.toggle('overflow-hidden')
  }

  return (
    <>
      <div className={`${clicked ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'} absolute font-poppins text-white inset-x-0 top-0 flex items-center justify-between p-6 z-40 transition duration-1000`}>
        <div className="font-bold tracking-wider">
          <Link to={"/"} onClick={onToggleMenu}>RYANZOLA</Link>
        </div>

        <div className="block md:hidden">
          <button onClick={onToggleMenu} className=" focus:ring focus:ring-offset-1 focus:ring-gray-400 focus:ring-opacity-50 focus:outline-none rounded-sm">
            <svg className="w-8 h-8 focus:outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex">
          <Link to={"/about"} className="mr-6 hover:text-gray-400 transition ease-in duration-150">About</Link>
          <Link to={"/web"} className="mr-6 hover:text-gray-400 transition ease-in duration-150">Web</Link>
          <Link to={"/modeling"} className="hover:text-gray-400 transition ease-in duration-150">3D Modeling</Link>
        </nav>
      </div>
    </>
  )
}