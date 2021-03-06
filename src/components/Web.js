import React, { useEffect } from 'react'
import ShowcaseItem from './ShowcaseItem';

export default function Web({ setClicked, setReady }) {
  useEffect(() => {
    setClicked(true)
    setReady(true)
  }, [])

  return (
    <div className="container mx-auto pt-20 px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <ShowcaseItem 
        projectUrl="https://hyyvc.csb.app/"
        imgUrl="/thumbnails/peloton.png"
        alt="peloton thumbnail"
        title={'Peloton'}
        techUsed={['React, React Three Fiber', 'Blender']}
      />

      <ShowcaseItem
        projectUrl="https://4qw2k.csb.app/"
        imgUrl="/thumbnails/falling-boxes.png"
        alt="falling boxes thubnail"
        title="Falling Boxes"
        techUsed={[ 'Parcel', 'WebGL', 'ThreeJS', 'Oimo' ]}
      />

      <ShowcaseItem
        projectUrl="https://codepen.io/ryanzola/full/wvBGdmM"
        imgUrl="/thumbnails/spotify.png"
        alt="spotify thumbnail"
        title="Spotify"
        techUsed={[ 'Parcel', 'ThreeJS' ]}
      />

      <ShowcaseItem
        projectUrl="https://codepen.io/ryanzola/full/WPxaeq"
        imgUrl="/thumbnails/heart-container.png"
        alt="heart container thumbnail"
        title="Heart Container"
        techUsed={[ 'SVG', 'GSAP', 'Illustrator' ]}
      />

      <ShowcaseItem
        projectUrl="https://codepen.io/ryanzola/full/xmXNzg"
        imgUrl="/thumbnails/punch-out.png"
        alt="punch out thumbnail"
        title="Punch Out"
        techUsed={[ 'SVG', 'GSAP' ]}
      />

      <ShowcaseItem
        projectUrl="https://codepen.io/ryanzola/full/RwwJmOX"
        imgUrl="/thumbnails/interactive.png"
        alt="interactive tool thumbnail"
        title="Interactive Tool"
        techUsed={[ 'SVG', 'GSAP', 'XState', 'Illustrator' ]}
      />

<ShowcaseItem
        projectUrl="https://4qw2k.csb.app/"
        imgUrl="/thumbnails/noise.png"
        alt="falling boxes thubnail"
        title="Falling Boxes"
        techUsed={[ 'WebGL', 'ThreeJS' ]}
      />
    </div>
  )
}