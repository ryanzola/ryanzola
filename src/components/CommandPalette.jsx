import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const COMMANDS = [
  // Navigation
  { id: 'home', label: 'Home', section: 'Navigation', icon: '🏠', action: 'navigate', to: '/' },
  { id: 'about', label: 'About', section: 'Navigation', icon: '👤', action: 'navigate', to: '/about' },
  { id: 'web', label: 'Web Projects', section: 'Navigation', icon: '🌐', action: 'navigate', to: '/web' },
  { id: 'modeling', label: '3D Modeling', section: 'Navigation', icon: '🎨', action: 'navigate', to: '/modeling' },
  { id: 'nft', label: 'NFT Collection', section: 'Navigation', icon: '🖼️', action: 'navigate', to: '/nft' },

  // External links
  { id: 'github', label: 'GitHub', section: 'Links', icon: '🔗', action: 'external', url: 'https://github.com/ryanzola' },
  { id: 'codepen', label: 'CodePen', section: 'Links', icon: '🔗', action: 'external', url: 'https://codepen.io/ryanzola' },
  { id: 'linkedin', label: 'LinkedIn', section: 'Links', icon: '🔗', action: 'external', url: 'https://www.linkedin.com/in/ryanzola/' },
  { id: 'email', label: 'Email Me', section: 'Links', icon: '✉️', action: 'external', url: 'mailto:ryanzola@me.com' },
]

function fuzzyMatch(query, text) {
  query = query.toLowerCase()
  text = text.toLowerCase()
  if (!query) return true
  
  let qi = 0
  for (let ti = 0; ti < text.length && qi < query.length; ti++) {
    if (text[ti] === query[qi]) qi++
  }
  return qi === query.length
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const filtered = COMMANDS.filter(cmd => fuzzyMatch(query, cmd.label + ' ' + cmd.section))

  // Group by section
  const sections = filtered.reduce((acc, cmd) => {
    if (!acc[cmd.section]) acc[cmd.section] = []
    acc[cmd.section].push(cmd)
    return acc
  }, {})

  const toggle = useCallback(() => {
    setOpen(prev => {
      if (!prev) {
        setQuery('')
        setActiveIndex(0)
      }
      return !prev
    })
  }, [])

  // ⌘K / Ctrl+K listener
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        toggle()
      }
      if (e.key === 'Escape' && open) {
        e.preventDefault()
        setOpen(false)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, toggle])

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.querySelector('[data-active="true"]')
      if (active) active.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  // Reset active index when query changes
  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const executeCommand = (cmd) => {
    setOpen(false)
    if (cmd.action === 'navigate') {
      if (pathname === cmd.to) return
      if (document.startViewTransition) {
        document.startViewTransition(() => navigate(cmd.to))
      } else {
        navigate(cmd.to)
      }
    } else if (cmd.action === 'external') {
      window.open(cmd.url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault()
      executeCommand(filtered[activeIndex])
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-200 flex items-start justify-center pt-[15vh]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Palette */}
      <div
        className="relative w-full max-w-lg mx-4 rounded-xl overflow-hidden shadow-2xl border border-white/10"
        style={{
          background: 'rgba(20, 20, 20, 0.85)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          animation: 'palette-in 0.15s ease-out',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center px-4 border-b border-white/10">
          <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-4 bg-transparent text-white text-lg outline-none placeholder-gray-500"
            placeholder="Type a command or search…"
            aria-label="Search commands"
            autoComplete="off"
            spellCheck="false"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs text-gray-500 bg-white/5 border border-white/10 rounded-md">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-72 overflow-y-auto py-2" role="listbox">
          {filtered.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-500">
              No results found
            </div>
          )}
          {Object.entries(sections).map(([section, items]) => (
            <div key={section}>
              <div className="px-4 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {section}
              </div>
              {items.map(cmd => {
                const flatIndex = filtered.indexOf(cmd)
                const isActive = flatIndex === activeIndex
                return (
                  <button
                    key={cmd.id}
                    data-active={isActive}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                    onClick={() => executeCommand(cmd)}
                    onMouseEnter={() => setActiveIndex(flatIndex)}
                    role="option"
                    aria-selected={isActive}
                  >
                    <span className="text-lg" aria-hidden="true">{cmd.icon}</span>
                    <span className="flex-1 font-medium">{cmd.label}</span>
                    {cmd.action === 'navigate' && pathname === cmd.to && (
                      <span className="text-xs text-gray-500">Current</span>
                    )}
                    {cmd.action === 'external' && (
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {/* Footer hints */}
        <div className="flex items-center gap-4 px-4 py-2.5 border-t border-white/10 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px]">↑↓</kbd>
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px]">↵</kbd>
            select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px]">esc</kbd>
            close
          </span>
        </div>
      </div>
    </div>
  )
}
