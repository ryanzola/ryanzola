import React, { useEffect } from 'react'
import ViewTransitionLink from '../ViewTransitionLink'

const CAPABILITIES = [
  {
    emoji: '🤖',
    title: 'AI Engine',
    items: ['Gemini 2.5 Flash with streaming', 'Mem0 long-term memory', 'Custom persona (soul.md)', 'Multi-turn tool-use'],
  },
  {
    emoji: '🏋️',
    title: 'Workout Intelligence',
    items: ['Progressive overload analysis', 'Day-specific workout plans', 'Quick-log by number', 'Exercise history tracking'],
  },
  {
    emoji: '📋',
    title: 'Guided Check-in',
    items: ['Weight → observations → energy flow', 'Inline button inputs', 'Previous session context', 'Auto metric extraction'],
  },
  {
    emoji: '📊',
    title: 'Metrics & Trends',
    items: ['Weight & energy tracking', 'Inline chart generation', 'Natural language parsing', 'Daily trend analysis'],
  },
  {
    emoji: '🍽',
    title: 'Nutrition',
    items: ['Photo-based food logging', 'Nutrition label scanning', 'MyFitnessPal screenshots', 'Daily macro tracking'],
  },
  {
    emoji: '🗣',
    title: 'Voice & Vision',
    items: ['Whisper voice transcription', 'ElevenLabs TTS output', 'Multi-image analysis', 'Progress photo tracking'],
  },
]

const COMMANDS = [
  { cmd: '/workout', desc: "Today's personalized plan" },
  { cmd: '/log', desc: 'Quick-log an exercise' },
  { cmd: '/checkin', desc: 'Guided morning check-in' },
  { cmd: '/assessment', desc: 'End-of-day breakdown' },
  { cmd: '/trend', desc: 'Chart a metric trend' },
  { cmd: '/remind', desc: 'Set a reminder' },
  { cmd: '/temp', desc: 'Nest thermostat reading' },
  { cmd: '/memory', desc: 'Manage long-term memories' },
]

const TECH = [
  { label: 'TypeScript', color: 'text-blue-400' },
  { label: 'Gemini 2.5 Flash', color: 'text-purple-400' },
  { label: 'grammY', color: 'text-cyan-400' },
  { label: 'Mem0', color: 'text-green-400' },
  { label: 'SQLite', color: 'text-yellow-400' },
  { label: 'OpenAI Whisper', color: 'text-pink-400' },
  { label: 'ElevenLabs', color: 'text-orange-400' },
  { label: 'Google SDM', color: 'text-red-400' },
  { label: 'node-cron', color: 'text-gray-400' },
]

const ARCHITECTURE = [
  { file: 'agent.ts', desc: 'Gemini agent loop' },
  { file: 'tools.ts', desc: 'Tool declarations + execution' },
  { file: 'bot.ts', desc: 'Telegram handlers & commands' },
  { file: 'db.ts', desc: 'SQLite schema + CRUD' },
  { file: 'metrics.ts', desc: 'Metric extraction' },
  { file: 'charts.ts', desc: 'Trend chart generation' },
  { file: 'nest.ts', desc: 'Thermostat integration' },
  { file: 'soul.md', desc: 'AI persona guidelines' },
]

export default function GravityClaw({ setClicked, setReady }) {
  useEffect(() => {
    setClicked(true)
    setReady(true)
  })

  return (
    <div className="container mx-auto pt-24 px-6 pb-16 max-w-5xl">

      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <ViewTransitionLink to="/apps" className="hover:text-white transition-colors">Apps</ViewTransitionLink>
        <span className="mx-2">/</span>
        <span className="text-white">Gravity Claw</span>
      </div>

      {/* Hero */}
      <div className="scroll-slide mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">🦾</span>
          <div>
            <h1 className="font-bold text-4xl md:text-5xl">Gravity Claw</h1>
            <p className="text-gray-400 text-lg mt-1">AI fitness & life companion on Telegram</p>
          </div>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          A personal AI agent that lives in Telegram — tracking workouts with progressive
          overload analysis, logging nutrition from photos, generating trend charts, controlling
          your thermostat, and remembering everything across conversations.
        </p>
      </div>

      {/* Capabilities Grid */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-8">⚡ Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map(cap => (
            <div
              key={cap.title}
              className="scroll-reveal rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{cap.emoji}</span>
                <h3 className="font-semibold text-lg">{cap.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {cap.items.map(item => (
                  <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Commands */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-6">⌨️ Commands</h2>
        <div className="scroll-reveal rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          {COMMANDS.map((cmd, i) => (
            <div
              key={cmd.cmd}
              className={`flex items-center justify-between px-5 py-3 ${i !== COMMANDS.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors`}
            >
              <code className="text-emerald-400 text-sm font-mono">{cmd.cmd}</code>
              <span className="text-gray-400 text-sm">{cmd.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-6">🏗 Architecture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {ARCHITECTURE.map(mod => (
            <div
              key={mod.file}
              className="scroll-reveal rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors duration-300"
            >
              <code className="text-xs text-purple-400 font-mono">{mod.file}</code>
              <p className="text-gray-400 text-xs mt-1">{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-6">🛠 Built With</h2>
        <div className="flex flex-wrap gap-2">
          {TECH.map(t => (
            <span
              key={t.label}
              className={`scroll-reveal px-3 py-1.5 text-sm rounded-lg border border-white/10 bg-white/5 ${t.color}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* Reliability */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-6">🛡 Reliability</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { title: 'Conversation Sanitizer', desc: 'Single-pass validator for valid Gemini API turn ordering' },
            { title: 'Retry Logic', desc: 'Exponential backoff with jitter on all API calls' },
            { title: 'Rate Limiting', desc: '15 messages per 60-second sliding window' },
            { title: 'Concurrency Lock', desc: 'Per-chat locks prevent race conditions' },
            { title: 'Structured Logging', desc: 'JSON-line logs with timestamps and tags' },
            { title: 'Persistent Reminders', desc: 'SQLite-backed, survives restarts' },
          ].map(item => (
            <div
              key={item.title}
              className="scroll-reveal rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors duration-300"
            >
              <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Back */}
      <div className="pt-4 border-t border-white/10">
        <ViewTransitionLink to="/apps" className="text-gray-500 hover:text-white transition-colors text-sm">
          ← Back to Apps
        </ViewTransitionLink>
      </div>
    </div>
  )
}
