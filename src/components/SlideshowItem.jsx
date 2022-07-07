import { useState } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideshowItem = ({
  data, 
  walletAddress,
  connectWallet
}) => {
  const [mint, setMint] = useState(0)
  const settings = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const updateMintAmount = (add = false) => {
    if(!add && mint === 0) return
    if(add && mint === 3) return

    const newMint = add ? mint+1 : mint-1

    setMint(newMint)
  }

  return (
    <div className="rounded-md bg-gray-800 overflow-hidden font-averta flex-1 mx-auto" style={{ maxWidth: 300 }}>
      <Slider {...settings}>
        <div>
          <img src={data[0].url} alt="" className="w-full h-full"/>
        </div>
        <div>
          <img src={data[1].url} alt="" className="w-full h-full"/>
        </div>
        <div>
          <img src={data[2].url} alt="" className="w-full h-full"/>
        </div>
      </Slider>
      
      <div className="flex flex-col justify-center p-8 text-center">
        <p className="text-4xl font-averta-bold mb-2">{ data[0].price } SOL</p>
        <p className='leading-tight opacity-50 text-xxxs xs:text-xxs'>You will receive 1 of 3 variations at mint</p>

        <div className="flex justify-center gap-2 mt-10 mx-auto">
          <button onClick={() => updateMintAmount(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
          <span className="mx-4 text-3xl font-bold">{ mint }</span>
          <button onClick={() => updateMintAmount(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        {
          walletAddress 
          ? (
            <button className={`rounded py-3 my-3 font-bold text-2xl md:text-sm lg:text-2xl ${ !!mint ? 'bg-white text-black' : 'bg-black text-gray-600'} transition-colors ease-in-out`}  disabled={ !mint }>{ !mint ? 'Select Quantity' : 'Mint'}</button>
          ) : 
          (
            <button className="rounded py-3 my-3 font-bold text-2xl md:text-sm lg:text-2xl bg-black text-gray-600 transition-colors ease-in-out"  onClick={connectWallet}>Connect Wallet</button>
          )
        }
        <p className="opacity-70 font-bold text-sm">{ data[0].quantity - data[0].sold } remaining out of { data[0].quantity }</p>
      </div>
    </div>
  )
}

export default SlideshowItem