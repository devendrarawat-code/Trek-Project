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
            <button className="call-btn">
              <div className="svg"> 
                 <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6952 16.1327L20.1259 16.6987C20.1259 16.6987 18.7726 18.0444 15.0789 14.3715C11.3851 10.6988 12.7384 9.35321 12.7384 9.35321L13.0969 8.99672C13.9801 8.11855 14.0634 6.70863 13.2927 5.67935L11.7166 3.57385C10.7628 2.2999 8.91995 2.13161 7.82681 3.21853L5.86481 5.1694C5.32279 5.70835 4.95956 6.40698 5.00361 7.18201C5.1163 9.16477 6.01339 13.4309 11.0192 18.4082C16.3276 23.6865 21.3085 23.8962 23.3454 23.7064C23.9896 23.6464 24.5499 23.3182 25.0014 22.8692L26.7771 21.1037C27.9757 19.9119 27.6377 17.8686 26.1041 17.035L23.716 15.7367C22.709 15.1894 21.4822 15.3501 20.6952 16.1327Z" fill="#F37002"/>
</svg></div>
            

            </button>
            <button className="book-btn">BOOK NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdventureCards;
