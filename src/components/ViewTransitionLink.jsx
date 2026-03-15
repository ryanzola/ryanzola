import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ViewTransitionLink({ to, children, className, onClick }) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    
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
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
