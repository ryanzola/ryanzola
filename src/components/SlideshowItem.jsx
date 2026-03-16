import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

const SlideshowItem = ({ data }) => {
  const [mint, setMint] = useState(0)
  const [emblaRef] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false }), Fade()]
  )

  const updateMintAmount = (add = false) => {
    if (!add && mint === 0) return
    if (add && mint === 3) return
    setMint(add ? mint + 1 : mint - 1)
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden flex-1 mx-auto transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
      style={{ maxWidth: 320, background: 'linear-gradient(145deg, rgba(30,30,40,1), rgba(15,15,25,1))' }}
    >
      {/* Subtle gradient border effect */}
      <div className="absolute inset-0 rounded-2xl p-px bg-linear-to-br from-white/20 via-transparent to-purple-500/20 pointer-events-none z-10" />

      {/* Image carousel */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.slice(0, 3).map((item, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.url}
                  alt={item.name || `NFT artwork variant ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[rgba(15,15,25,1)] to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center px-6 pb-6 pt-2 text-center">
        {/* Price */}
        <div className="mb-3">
          <p className="text-3xl font-averta-bold tracking-tight">
            {data[0].price}
            <span className="text-lg ml-1.5 text-gray-400 font-normal">SOL</span>
          </p>
          <p className="text-gray-500 text-xs mt-1">1 of 3 random variations at mint</p>
        </div>

        {/* Quantity selector */}
        <div className="flex items-center justify-center gap-4 my-4 py-3 rounded-xl bg-white/5 border border-white/5">
          <button
            onClick={() => updateMintAmount(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30"
            disabled={mint === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <span className="text-2xl font-bold w-8 text-center tabular-nums">{mint}</span>
          <button
            onClick={() => updateMintAmount(true)}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30"
            disabled={mint === 3}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Action button */}
        <button
          className="rounded-xl py-3 font-bold text-sm tracking-wide uppercase bg-white/5 text-gray-600 cursor-not-allowed border border-white/5 flex items-center justify-center gap-2"
          disabled
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Mint Ended
        </button>

        {/* Remaining count */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${((data[0].quantity - data[0].sold) / data[0].quantity) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 whitespace-nowrap">
            {data[0].quantity - data[0].sold}/{data[0].quantity}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SlideshowItem