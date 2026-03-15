import React from 'react'

export default function ShowcaseItem({ projectUrl, imgUrl, alt, title, techUsed }) {
  return (
    <a className="w-full bg-gray-800 rounded-md shadow-md overflow-hidden hover:bg-gray-900 transition ease-in duration-150" href={projectUrl} target="_blank" rel="noreferrer">
    <div 
      className="h-60 bg-cover" 
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'}}>
      {/* <img src={imgUrl} alt={alt} /> */}
    </div>
    <div>
      <div className="p-3">
        <div className="font-semibold text-2xl">{ title }</div>
        <div className="font-light text-sm">{ techUsed.join(', ') }</div>
      </div>
    </div>

  </a>
  )
}