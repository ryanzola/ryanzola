import React, { useEffect } from 'react'

const APPS = [
  {
    name: 'Health Tracker',
    description: 'Workout tracking and nutrition analytics powered by Apple Health data and AI insights.',
    tags: ['Vue.js', 'Firebase', 'Cloudflare Workers', 'Telegram Bot'],
    url: 'https://health.ryanzola.dev',
    emoji: '💪',
    status: 'Live',
  },
  {
    name: 'Pizzeria',
    description: 'A gamified pizza delivery simulation with resource management, leveling, and real-time order tracking.',
    tags: ['Vue.js', 'Pinia', 'Mapbox', 'Firebase'],
    url: null,
    emoji: '🍕',
    status: 'In Progress',
  },
  {
    name: 'AI Agent',
    description: 'Personal AI assistant with tool use, streaming responses, and multi-turn conversation memory.',
    tags: ['Node.js', 'Gemini API', 'Telegram', 'MCP'],
    url: null,
    emoji: '🤖',
    status: 'In Progress',
  },
]

function StatusBadge({ status }) {
  const colors = {
    'Live': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'In Progress': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'Coming Soon': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[status] || colors['Coming Soon']}`}>
      {status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />}
      {status}
    </span>
  )
}

function AppCard({ app }) {
  const Wrapper = app.url ? 'a' : 'div'
  const wrapperProps = app.url
    ? { href: app.url, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <Wrapper
      className="scroll-reveal block rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
      {...wrapperProps}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden="true">{app.emoji}</span>
          <div>
            <h2 className="text-xl font-semibold group-hover:text-white transition-colors">
              {app.name}
            </h2>
          </div>
        </div>
        <StatusBadge status={app.status} />
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {app.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {app.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {app.url && (
        <div className="mt-4 flex items-center gap-1.5 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
          <span>Visit app</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      )}
    </Wrapper>
  )
}

export default function Apps({ setClicked, setReady }) {
  useEffect(() => {
    setClicked(true)
    setReady(true)
  })

  return (
    <div className="container mx-auto pt-20 px-6 pb-12">
      <div className="scroll-slide mb-8">
        <h1 className="font-bold text-3xl mb-2">Apps</h1>
        <p className="text-gray-400">Things I'm building for myself — and sometimes others.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {APPS.map(app => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </div>
  )
}
