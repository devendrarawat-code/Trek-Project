import React from 'react'

const CategoryCardSelection = ({title,image,descriptions}) => {
  return (
    <div className='category-card' style={{backgroundImage:`url(${image})` }}>
        <div className='category-content'>
            <div className='category-title'>{title}</div>
            <p className='category-description'>{descriptions}</p>
        </div>
    </div>
  )
}

export default CategoryCardSelection