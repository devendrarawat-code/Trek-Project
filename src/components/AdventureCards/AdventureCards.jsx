import React from "react";
import { useState } from "react";

const AdventureCards = ({
  photo =[],
  duration,
  title,
  rating,
  reviewcount,
  price,
  originalPrice,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages=Array.isArray(photo) && photo.length>0;

  const handlePrev=()=>{
if(!hasImages) return
    setCurrentIndex((prev)=>(prev===0 ? photo.length-1:prev-1))
  }
  const handleNext=()=>{
    if(!hasImages) return
    setCurrentIndex((prev)=>(prev===photo.length-1 ? 0:prev+1))
  }
  
  return (
    <>
      <div className="pack-card">
        <div className="package-photo">
          {hasImages ? (
            <>
            <img src={photo[currentIndex]} alt={title} />
 {photo.length > 1 && (
            <>
              <button className="prev-btn" onClick={handlePrev}>
                ◀
              </button>
              <button className="next-btn" onClick={handleNext}>
                ▶
              </button>
            </>
          )}
            </>):
            (<>
            <div className="no-image">no image avaiable</div>
            </>
            )}
         
        </div>
        <div className="package-content">
          <div className="package-details">
            <div className="duration">{duration}</div>
            <span className="card-rating">⭐ {rating}
            <span className="review-count">   ({reviewcount})</span> </span>
          </div>
          <div className="package-title">{title}</div> 
          <div className="pricing">
            <div className="price">INR {price.toLocaleString()}</div>
            <div className="original-price">
              INR {originalPrice.toLocaleString()}
            </div>
          </div>
          <div className="card-footer">
            <div className="call-btn">📞</div>
            <div className="book-btn">BOOK NOW</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdventureCards;
