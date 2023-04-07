import { Link } from "react-router-dom";
import { useEffect } from 'react';

export default function Menu({ menu, setMenu }) {
  const FOCUSABLE_ELEMENTS = document.querySelectorAll('#mobile-menu-tray a, button#mobile-menu-button')
  const FIRST_ELEMENT = FOCUSABLE_ELEMENTS[0]
  const LAST_ELEMENT = FOCUSABLE_ELEMENTS[FOCUSABLE_ELEMENTS.length - 1]

  const onToggleMenu = () => {
    setMenu(!menu);
    document.querySelector('body').classList.toggle('overflow-hidden')

    console.log(FOCUSABLE_ELEMENTS)
  }

  const keyHandler = (e) => {
    // escape
    if(e.key === 'Escape') {
      onToggleMenu()
    }

    if(e.key === 'Tab') {
      if(e.shiftKey && document.activeElement === FIRST_ELEMENT) {
        e.preventDefault()
        LAST_ELEMENT.focus()
      }

      if(!e.shiftKey && document.activeElement === LAST_ELEMENT) {
        console.log(FOCUSABLE_ELEMENTS)
        e.preventDefault()
        FIRST_ELEMENT.focus()
      }
    }
  }

  useEffect(() => {
    if(menu) {
      FIRST_ELEMENT.focus()
      document.addEventListener('keydown', keyHandler, false)
    } else {
      document.removeEventListener('keydown', keyHandler, false)
    }

    return () => document.removeEventListener('keydown', keyHandler, false)
  }, [menu])

  const menuClassList = `fixed z-50 inset-0 bg-blur transition-opacity ease-in-out duration-200 ${menu ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}`

  return (
    <div id="mobile-menu-tray" className={menuClassList} onClick={onToggleMenu} aria-expanded={menu} aria-hidden={!menu}>
      <div className="pt-32 p-6">
        <nav className="text-2xl text-center" aria-label="main navigation">
          <ul>
            <li className='mb-10'><Link to={"/about"} className="hover:text-gray-400 transition ease-in duration-150" tabIndex={!menu ? -1 : 0}>About</Link></li>
            <li className="mb-10"><Link to={"/web"} className="hover:text-gray-400 transition ease-in duration-150" tabIndex={!menu ? -1 : 0}>Web</Link></li>
            <li className="mb-10"><Link to={"/modeling"} className="block hover:text-gray-400 transition ease-in duration-150" tabIndex={!menu ? -1 : 0}>3D Modeling</Link></li>
            <li><Link to={"/nft"} className="hover:text-gray-400 transition ease-in duration-150" tabIndex={!menu ? -1 : 0}>NFT</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}