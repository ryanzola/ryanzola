import React from 'react'
import { Link } from "react-router-dom";

export default function Menu({ menu, setMenu }) {
  function onToggleMenu() {

    setMenu(!menu);
    document.querySelector('body').classList.toggle('overflow-hidden')
  }

  return (
    <div className={`fixed z-40 inset-0 bg-gray-900 transition ease-in duration-200 ${menu ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}`} onClick={onToggleMenu}>
      <div className="pt-32 p-6">
        <nav className="text-2xl text-center">
            <Link to={"/about"} className="mb-10 block hover:text-gray-400 transition ease-in duration-150">About</Link>
            <Link to={"/web"} className="mb-10 block hover:text-gray-400 transition ease-in duration-150">Web</Link>
            <Link to={"/modeling"} className="block hover:text-gray-400 transition ease-in duration-150">3D Modeling</Link>
          </nav>
      </div>
    </div>
  )
}