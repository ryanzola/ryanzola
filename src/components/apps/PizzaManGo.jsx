import React, { useEffect } from 'react'
import ViewTransitionLink from '../ViewTransitionLink'

const SCREENSHOTS = [
  { src: '/apps/pizzamango/home.png', label: 'Home' },
  { src: '/apps/pizzamango/deliveries.png', label: 'Deliveries' },
  { src: '/apps/pizzamango/delivery-detail.png', label: 'Delivery Detail' },
  { src: '/apps/pizzamango/pizzeria.png', label: 'Pizzeria' },
  { src: '/apps/pizzamango/depot.png', label: 'Depot' },
  { src: '/apps/pizzamango/bakery.png', label: 'Bakery' },
  { src: '/apps/pizzamango/bank.png', label: 'Bank' },
  { src: '/apps/pizzamango/profile.png', label: 'Profile' },
]

const FLOW_STEPS = [
  { emoji: '🍕', title: 'Orders Roll In', desc: 'AI generates realistic pizza orders from a real menu using Gemini' },
  { emoji: '🚗', title: 'Hit the Road', desc: 'Pick up deliveries and navigate to real addresses in your neighborhood' },
  { emoji: '💰', title: 'Earn Tips', desc: 'Complete deliveries to grow revenue and earn driver tips' },
  { emoji: '📦', title: 'Restock', desc: 'Travel to the Depot or Bakery IRL to resupply ingredients' },
  { emoji: '⬆️', title: 'Level Up', desc: '10 levels of pizzeria upgrades — up to 3.5× inventory capacity' },
  { emoji: '🏦', title: 'Bank It', desc: 'Deposit tips at the bank before you hit the carry limit' },
]

const TECH = [
  { label: 'Vue 3', color: 'text-emerald-400' },
  { label: 'Vite', color: 'text-purple-400' },
  { label: 'Tailwind CSS', color: 'text-cyan-400' },
  { label: 'Vuex + VueFire', color: 'text-orange-400' },
  { label: 'Cloud Firestore', color: 'text-yellow-400' },
  { label: 'Firebase Functions', color: 'text-amber-400' },
  { label: 'Google Gemini', color: 'text-blue-400' },
  { label: 'Firebase Auth', color: 'text-red-400' },
  { label: 'Firebase Hosting', color: 'text-pink-400' },
]

const RESOURCES = [
  { name: 'Dough', emoji: '🫓' },
  { name: 'Cheese', emoji: '🧀' },
  { name: 'Proteins', emoji: '🥩' },
  { name: 'Produce', emoji: '🥬' },
  { name: 'Pasta', emoji: '🍝' },
  { name: 'Fry Oil', emoji: '🛢️' },
  { name: 'Beverages', emoji: '🥤' },
  { name: 'Desserts', emoji: '🍰' },
  { name: 'Bread', emoji: '🍞' },
]

export default function PizzaManGo({ setClicked, setReady }) {
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
        <span className="text-white">PizzaManGo</span>
      </div>

      {/* Hero */}
      <div className="scroll-slide mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">🥭</span>
          <div>
            <h1 className="font-bold text-4xl md:text-5xl">PizzaManGo</h1>
            <p className="text-gray-400 text-lg mt-1">A location-based pizza delivery game</p>
          </div>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Run a pizzeria, deliver orders across real-world neighborhoods, manage your ingredient inventory,
          restock at the depot, and level up your business — all from your phone.
        </p>
      </div>

      {/* Screenshots */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-6">📱 Screenshots</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SCREENSHOTS.map(shot => (
            <div key={shot.label} className="scroll-reveal group">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300">
                <img
                  src={shot.src}
                  alt={`PizzaManGo ${shot.label} screen`}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">{shot.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-8">🎮 How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FLOW_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="scroll-reveal rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{step.emoji}</span>
                <span className="text-xs text-gray-500 font-mono">0{i + 1}</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-4">📦 9 Ingredient Types</h2>
        <p className="text-gray-400 text-sm mb-6">Orders consume resources. When stock hits zero, no new orders until you restock IRL.</p>
        <div className="flex flex-wrap gap-3">
          {RESOURCES.map(r => (
            <div
              key={r.name}
              className="scroll-reveal flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span>{r.emoji}</span>
              <span className="text-sm font-medium">{r.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Leveling */}
      <section className="mb-16">
        <h2 className="scroll-slide font-bold text-2xl mb-6">⭐ Pizzeria Leveling</h2>
        <div className="scroll-reveal rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-end justify-between gap-2 h-32 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => {
              const capacity = 1 + (level - 1) * (2.5 / 9)
              const height = (capacity / 3.5) * 100
              return (
                <div key={level} className="flex-1 h-full flex items-end">
                  <div
                    className="w-full rounded-t-md transition-all duration-500"
                    style={{
                      height: `${height}%`,
                      background: `linear-gradient(to top, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, ${0.2 + level * 0.08}))`,
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  />
                </div>
              )
            })}
          </div>
          <div className="flex items-end justify-between gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => (
              <div key={level} className="flex-1 text-center text-xs text-gray-500">{level}</div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-3 pt-3 border-t border-white/5">
            <span>1.0× capacity</span>
            <span>Level</span>
            <span>3.5× capacity</span>
          </div>
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

      {/* Back */}
      <div className="pt-4 border-t border-white/10">
        <ViewTransitionLink to="/apps" className="text-gray-500 hover:text-white transition-colors text-sm">
          ← Back to Apps
        </ViewTransitionLink>
      </div>
    </div>
  )
}
