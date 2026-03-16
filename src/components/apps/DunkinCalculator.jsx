import React, { useEffect } from 'react'
import ViewTransitionLink from '../ViewTransitionLink'

const SCREENSHOTS = [
  { src: '/apps/dunkin/browse.png', label: 'Browse' },
  { src: '/apps/dunkin/search.png', label: 'Search' },
  { src: '/apps/dunkin/detail.png', label: 'Item Detail' },
  { src: '/apps/dunkin/order-tracker.png', label: 'Order Tracker' },
]

const FEATURES = [
  {
    emoji: '🔍',
    title: 'Browse & Search',
    desc: '997 menu items across 48 categories with real-time search and scrollable category pills.',
  },
  {
    emoji: '📊',
    title: 'Nutrition Breakdown',
    desc: 'Macro bar visualization (fat / carbs / protein as % of calories) plus a full FDA-style nutrition table.',
  },
  {
    emoji: '🛒',
    title: 'Order Tracker',
    desc: 'Build a running order via the slide-out drawer with live macro totals that update as you add items.',
  },
  {
    emoji: '🔄',
    title: 'Auto-Updated Weekly',
    desc: 'GitHub Actions scrapes the official Dunkin\' nutrition PDF every Monday — always up to date, zero manual work.',
  },
]

const STATS = [
  { value: '997', label: 'Menu Items' },
  { value: '48', label: 'Categories' },
  { value: '16', label: 'Nutrition Fields' },
  { value: '7d', label: 'Data Refresh' },
]

const TECH = [
  { label: 'React' },
  { label: 'Vite' },
  { label: 'Tailwind CSS v4' },
  { label: 'Firebase Hosting' },
  { label: 'GitHub Actions' },
  { label: 'PDF Parsing' },
]

export default function DunkinCalculator({ setClicked, setReady }) {
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
        <span className="text-white">Dunkin' Calculator</span>
      </div>

      {/* Hero */}
      <div className="scroll-slide mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">🍩</span>
          <div>
            <h1 className="font-bold text-4xl md:text-5xl">Dunkin' Calculator</h1>
            <p className="text-gray-400 text-lg mt-1">Interactive nutrition lookup for every menu item</p>
          </div>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Browse the entire Dunkin' menu, check macros at a glance, build an order
          with live calorie tracking, and never worry about stale data — it refreshes
          itself every Monday.
        </p>
        <a
          href="https://dunkin-calculator.web.app"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 hover:bg-orange-500/30 transition-colors text-sm font-medium"
        >
          Try it live
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(stat => (
            <div key={stat.label} className="scroll-reveal text-center rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-bold text-orange-400">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-6">📱 Screenshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SCREENSHOTS.map(shot => (
            <div key={shot.label} className="scroll-reveal group">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300">
                <img
                  src={shot.src}
                  alt={`Dunkin' Calculator ${shot.label} screen`}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">{shot.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-8">✨ Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map(feat => (
            <div
              key={feat.title}
              className="scroll-reveal rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{feat.emoji}</span>
                <h3 className="font-semibold text-lg">{feat.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
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
              className="scroll-reveal px-3 py-1.5 text-sm rounded-lg border border-white/10 bg-white/5 text-gray-300"
            >
              {t.label}
            </span>
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
