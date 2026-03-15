import React, { useEffect } from 'react'
import ShowcaseItem from './ShowcaseItem';

export default function ThreeDee({ setClicked, setReady }) {
  useEffect(() => {
    setClicked(true)
    setReady(true)
  })

  return (
    <div className={`container mx-auto pt-20 px-6 pb-6`}>
      <div className="mb-10">
        <h1 className="mb-4 font-bold text-3xl">Animations</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ShowcaseItem 
            projectUrl="https://storage.googleapis.com/rz-videos/candy.mp4"
            imgUrl="/thumbnails/candy.png"
            alt="R.Z. candy thumbnail"
            title={'Candy'}
            techUsed={['Blender']}
          />
        <ShowcaseItem 
            projectUrl="https://storage.googleapis.com/rz-videos/fighting.mp4"
            imgUrl="/thumbnails/fighting.png"
            alt="figting song promo thumbnail"
            title={'Fighting Promo'}
            techUsed={['Blender']}
          />

        <ShowcaseItem 
            projectUrl="https://storage.googleapis.com/rz-videos/ball-room.mp4"
            imgUrl="/thumbnails/balls.png"
            alt="ball room thumbnail"
            title={'Ball Room'}
            techUsed={['Blender']}
          />

        <ShowcaseItem 
            projectUrl="https://storage.googleapis.com/rz-videos/coins.mp4"
            imgUrl="/thumbnails/coins.png"
            alt="mario block thumbnail"
            title={'Coins'}
            techUsed={['Blender']}
          />
        </div>
      </div>
      <div className="mb-10">
        <h1 className="mb-4 font-bold text-3xl">Stills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ShowcaseItem 
            projectUrl="/hi-res/spotify-blender.png"
            imgUrl="/thumbnails/spotify-blender.png"
            alt="falling spotify logos"
            title={'Spotify'}
            techUsed={['Blender']}
          />

          <ShowcaseItem 
            projectUrl="/thumbnails/rz.jpg"
            imgUrl="/thumbnails/rz.jpg"
            alt="ryan zola logo"
            title={'RZ'}
            techUsed={['Blender']}
          />
        </div>
      </div>
    </div>
  )
}