import React from 'react'

const HighlightedText = ({text}) => {
  return (
   <>
   <div className='highlight-container'>
    <span className="highlight-text">{text}</span>
   </div>
    <div className="underline"></div>
   </>
  )
}

export default HighlightedText