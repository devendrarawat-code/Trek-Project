import React, { useState } from 'react'
import img from "../../assets/main-image.jpg"
import img2 from "../../assets/sample.jpg"
import img3 from "../../assets/footer.png"
const ItinararyImageCarousel = () => {

    const image=[
img,img2,img3
    ]
    const[index,setIndex]=useState(0)

    const prev=()=>setIndex((prev)=>(prev===0 ? image.length-1:prev-1))
    const  next=()=>setIndex((prev)=>(prev===image.length-1 ? 0:prev+1))
    
  return (
   <>
   <div className="carousel-container">
    <img src={image[index]} alt="lide" className='carousel-img' />

   <button className='left-scroll' onClick={prev}>
      <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75V11.25ZM20 12.75H4V11.25H20V12.75Z"
              fill="white"
            />
            <path
              d="M10 6L4 12L10 18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
   </button>
   
   <button className='right-scroll' onClick={next}>
    <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM4 12.75H20V11.25H4V12.75Z"
              fill="white"
            />
            <path
              d="M14 6L20 12L14 18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
   </button>
   </div>
   </>
  )
}

export default ItinararyImageCarousel