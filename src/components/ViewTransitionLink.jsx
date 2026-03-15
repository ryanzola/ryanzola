import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function ViewTransitionLink({ to, children, className, onClick }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isActive = pathname === to

  const handleClick = (e) => {
    e.preventDefault()
    
    if (isActive) return

    if (onClick) onClick(e)

    if (!document.startViewTransition) {
      navigate(to)
      return
    }

    document.startViewTransition(() => {
      navigate(to)
    })
  }

  return (
    <a href={to} onClick={handleClick} className={className} aria-current={isActive ? 'page' : undefined}>
      {children}
    </a>
  )
}
