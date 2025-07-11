import React from 'react'

const ReviewCards = ({review,name,activityName}) => {
  return (
   <>
   <div className="review-cards">
    <div className="quote-icon">"</div>
    <div className='review-text'>{review}</div>
    <hr className='divider' />
    <div className='customer-name'>{name}</div>
    <div className="activity-name">{activityName}</div>
   </div>
   </>
  )
}

export default ReviewCards