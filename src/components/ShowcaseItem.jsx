import React from 'react'

export default function ShowcaseItem({ projectUrl, imgUrl, alt, title, techUsed }) {
  return (
    <a className="scroll-reveal w-full bg-gray-800 rounded-md shadow-md overflow-hidden hover:bg-gray-900 transition ease-in duration-150 group" href={projectUrl} target="_blank" rel="noreferrer">
      <div className="h-60 overflow-hidden">
        <img
          src={imgUrl}
          alt={alt}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <div className="font-semibold text-2xl">{ title }</div>
        <div className="font-light text-sm">{ techUsed.join(', ') }</div>
      </div>
    </a>
  )
}