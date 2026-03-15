import React from 'react'

export default function Overlay({ ready, clicked, setClicked, loaded }) {
  return (
    <>
      <div className={`fullscreen bg font-poppins ${loaded ? 'opacity-100' : 'opacity-0'} ${clicked && 'clicked'}`} aria-hidden={clicked}>
        <h1 className="text-3xl font-semibold mb-4" style={{display: !loaded ? 'none' : 'block'}}>Welcome</h1>
        <div className="cursor-pointer hover:text-gray-400 transition ease-in duration-150" onClick={() => loaded && setClicked(true)}>click to continue</div>
      </div>
    </>
  )
}
