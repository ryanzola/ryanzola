import React, { useEffect } from 'react'
import ShowcaseItem from './ShowcaseItem';

export default function ThreeDee({ setClicked, setReady }) {
  useEffect(() => {
    setClicked(true)
    setReady(true)
  }, [])

  return (
    <div className="container mx-auto pt-20 px-6 pb-6">
      <div className="mb-10">
        <h1 className="mb-4 font-bold text-3xl">Stills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ShowcaseItem 
            projectUrl="/thumbnails/candy.png"
            imgUrl="/thumbnails/candy.png"
            alt="R.Z. candy thumbnail"
            title={'Candy'}
            techUsed={['Blender']}
          />

          <ShowcaseItem 
            projectUrl="/thumbnails/spotify-blender.png"
            imgUrl="/thumbnails/spotify-blender.png"
            alt="falling spotify logos"
            title={'Spotify'}
            techUsed={['Blender']}
          />

          <ShowcaseItem 
            projectUrl="/thumbnails/fighting.png"
            imgUrl="/thumbnails/fighting.png"
            alt="figting song promo thumbnail"
            title={'Fighting Promo'}
            techUsed={['Blender']}
          />
        </div>
      </div>
      <div className="">
        <h1 className="mb-4 font-bold text-3xl">Animations</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ShowcaseItem 
            projectUrl="/videos/candy.mp4"
            imgUrl="/videos/candy.mp4"
            alt="R.Z. candy thumbnail"
            title={'Candy'}
            techUsed={['Blender']}
          />
        <ShowcaseItem 
            projectUrl="/videos/fighting.mp4"
            imgUrl="/videos/fighting.mp4"
            alt="figting song promo thumbnail"
            title={'Fighting Promo'}
            techUsed={['Blender']}
          />

        <ShowcaseItem 
            projectUrl="/videos/ball-room.mp4"
            imgUrl="/videos/ball-room.mp4"
            alt="ball room thumbnail"
            title={'Ball Room'}
            techUsed={['Blender']}
          />

        <ShowcaseItem 
            projectUrl="/videos/coins.mp4"
            imgUrl="/videos/coins.mp4"
            alt="mario block thumbnail"
            title={'Coins'}
            techUsed={['Blender']}
          />
        </div>
      </div>
    </div>
  )
}