import { Link } from "react-router-dom";

export default function Menu({ menu, setMenu }) {
  const onToggleMenu = () => {
    console.log('word', menu)
    setMenu(!menu);
    document.querySelector('body').classList.toggle('overflow-hidden')
  }

  return (
    <div className={`fixed z-40 inset-0 bg-gray-900 transition ease-in duration-200 ${menu ? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}`} id="mobile-menu-tray" onClick={onToggleMenu}>
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