import React from 'react'
import Banana from '../../public/images/banana.png'
import Strawberry from '../../public/images/Strawberry.png'
import Kiwi from '../../public/images/Kiwi.png'
import Bluberry from '../../public/images/Bluberry.png'
import { useState } from 'react'

const Banner = () => {

  const [Rotate,setRotate] = useState("rotate-[-40deg]")
  const [colors, setColors] = useState({backBg:"bg-[#FFF7CF]" , bannerBg:"bg-[#F5DE6E]"})
  return (
    <>
    <section className={`${colors.backBg} h-[1000px] transition-all duration-[1s] overflow-hidden pt-[299px] pb-[280px] relative `}>
      <div className='container'>
       <div className='banner_row'>
          <div className="banner_text">
              <h1 className='w-[605px] text-[70px] leading-[112px] font-Bricolage text-black font-semibold'>Sip Your Way to Bliss Taste</h1>
              <p className='w-[608px] font-ABeeZee font-normal my-[50px] text-[20px]'>We're dedicated to bringing you deliciously fresh smoothies, made with love, care, and the finest ingredients.</p>
              <div className='flex relative items-center  gap-[30px] '>
                  <button onClick={()=>{setRotate("rotate-[-40deg]") ,setColors((prev)=>({...prev ,backBg:"bg-[#FFF7CF]"  ,bannerBg:"bg-[#F5DE6E]"}))}} className=' w-[80px] h-[80px]'><img src={Banana} alt="" /></button>
                  
                  <button onClick={()=>{setRotate("rotate-[-133deg]") ,setColors((prev)=>({...prev ,backBg:"bg-[#FFE1E2]" ,bannerBg:"bg-[#FCB1B4]"}))}} className=' w-[80px] h-[80px]'><img src={Strawberry} alt="" /></button>
                  
                  <button onClick={()=>{setRotate("rotate-[-300deg]") ,setColors((prev)=>({...prev ,backBg:"bg-[#ECFFCC]" ,bannerBg:"bg-[#8FB352]"}))}} className=' w-[80px] h-[80px]'><img src={Kiwi} alt="" /></button>
                  
                  <button onClick={()=>{setRotate("rotate-[-220deg]") ,setColors((prev)=>({...prev ,backBg:"bg-[#FFCBEA]" ,bannerBg:"bg-[#C976A9]"}))}} className=' w-[65px] h-[65px]'><img src={Bluberry} alt="" /></button>
              </div>
             
          </div>
            <div className={`banner_foods absolute w-[1200px] ${Rotate} ${colors.bannerBg} transition-all duration-[1s] h-[1200px]  bg-[#F5DE6E] rounded-full right-[-400px] bottom-[-550px]`}>
              <div className="banana absolute top-[-276px] right-[240px] w-[700px]"><img src={Banana} alt="banana_img" /></div>
              <div className="Strawberry absolute top-[300px] right-[-300px] w-[700px]"><img src={Strawberry} alt="banana_img" /></div>
              <div className="Kiwi absolute bottom-[250px] left-[-335px] w-[650px]"><img src={Kiwi} alt="banana_img" /></div>
              <div className="Bluberry absolute bottom-[-210px] right-[400px]  w-[500px]"><img src={Bluberry} alt="banana_img" /></div>
            </div>
       </div>
      </div>
    </section>
    </>
  )
}

export default Banner
// banana- rotate-[-40deg]
// Strawberry rotate-[-133deg]
//  Kiwi rotate-[-300deg]
// Bluberry rotate-[-220deg]