import React, { useEffect } from 'react'


export default function About({ setClicked, setReady }) {
  useEffect(() => {
    setClicked(true)
    setReady(true)
  }, [])

  return (
    <>
    <video autoPlay muted loop id="myVideo" className="fixed top-0 left-0 min-h-full min-w-full object-cover">
      <source src="https://storage.cloud.google.com/rz-videos/waves.mp4" type="video/mp4" />
    </video>
    <div className="fixed inset-0 m-4 mt-20 md:m-16 md:mt-20 lg:my-48 lg:mx-32 xl:mx-64 bg-black bg-opacity-90">
      <div className="p-8 lg:p-16">
        <h1 className="text-2xl">Ryan Zola</h1>
        <h2 className="mb-4 text-xl font-thin">Senior Web Engineer</h2>
        <ul>
          <li>Creative coder</li>
          <li>3D Modeling/Animation</li>
          <li>Pixel art maker</li>
          <li>Attempter of things</li>
          <li>About section procrastinator</li>
        </ul>
      </div>
    </div>
    </>
  )
}