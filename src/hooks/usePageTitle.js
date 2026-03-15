import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TITLES = {
  '/': 'Ryan Zola — Creative Developer',
  '/about': 'About — Ryan Zola',
  '/web': 'Web Projects — Ryan Zola',
  '/modeling': '3D Modeling — Ryan Zola',
  '/nft': 'NFT — Ryan Zola',
}

export default function usePageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] || 'Ryan Zola'
  }, [pathname])
}
