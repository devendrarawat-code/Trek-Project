import React from 'react'

const RaftingCards = ({image,desc,distance,price}) => {
  return (

<>

<div className="card">
            <div className="image-box">
<img src={image} alt="image" />
            </div>
            <div className="description">
              <div className="upper-info">{distance} - {price}<span style={{fontSize:"15px"}}>/person</span></div>
              <div className="info">{desc}</div>
               <button className="book-button mobile-only"> Book Now</button>
            </div>
          </div>
</>  )
}

export default RaftingCards