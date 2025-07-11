import React from 'react'
import { useState } from 'react'
import ItinararyImageCarousel from '../ItinararyImageCarousel/ItinararyImageCarousel'
const ItenaryTabs = () => {
const itineraryData={
  "Day 1":{
    title:"Day 1 | Arrive at Govind ghat | Night in Govind Ghat",
  description:"From the rare Blue Poppy to countless alpine blossoms, every corner tells a floral story. The air is crisp, the path refreshing, and the views — absolutely breathtaking. If there’s one place where beauty speaks louder than words, it’s here.",
  points:[
    "From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner"
  ]
},
  "Day 2":{
    title:"Day 2 | Arrive at Govind ghat | Night in Govind Ghat",
  description:"From the rare Blue Poppy to countless alpine blossoms, every corner tells a floral story. The air is crisp, the path refreshing, and the views — absolutely breathtaking. If there’s one place where beauty speaks louder than words, it’s here.",
  points:[
    "From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner"
  ]
},
  "Day 3":{
    title:"Day 3 | Arrive at Govind ghat | Night in Govind Ghat",
  description:"From the rare Blue Poppy to countless alpine blossoms, every corner tells a floral story. The air is crisp, the path refreshing, and the views — absolutely breathtaking. If there’s one place where beauty speaks louder than words, it’s here.",
  points:[
    "From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner"
  ]
},
  "Day 4":{
    title:"Day 4 | Arrive at Govind ghat | Night in Govind Ghat",
  description:"From the rare Blue Poppy to countless alpine blossoms, every corner tells a floral story. The air is crisp, the path refreshing, and the views — absolutely breathtaking. If there’s one place where beauty speaks louder than words, it’s here.",
  points:[
    "From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner"
  ]
},
  "Day 5":{
    title:"Day 5 | Arrive at Govind ghat | Night in Govind Ghat",
  description:"From the rare Blue Poppy to countless alpine blossoms, every corner tells a floral story. The air is crisp, the path refreshing, and the views — absolutely breathtaking. If there’s one place where beauty speaks louder than words, it’s here.",
  points:[
    "From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner",
"From the rare Blue Poppy to countless alpine blossoms, every corner"
  ]
},
}
  const [activeDay, setactiveDay] = useState("Day 1")
  return (
   <>
<div className="itinerary-container">
  <div className="itinerary-top"> Itinerary</div>
  <div className="itinerary-tabs">
    {Object.keys(itineraryData).map(day=>(
      <button key={day} onClick={()=>setactiveDay(day)} className={`itinerary-tab ${day === activeDay ? 'active':""}`}>{day}</button>
    ))}
  </div>
  <div className="itinerary-card">
    <div className="itinerary-title">
      {itineraryData[activeDay].title}
    </div>
    <hr />
    <div className="itinerary-desciption">
      {itineraryData[activeDay].description}
    </div>
   <ItinararyImageCarousel/>
   <div className="itinerary-list-title">
    What we will do in {activeDay.toUpperCase()}
   </div>
   <ul className="itinerary-list">
    {itineraryData[activeDay].points.map((point,index)=>(
      <li key={index}>{point}</li>
    ))}
   </ul>
  </div>
</div>
   </>
  )
}

export default ItenaryTabs