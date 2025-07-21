import React from 'react'
import { useState } from 'react'

const RaftingBookingForm = ({isMobileFormOpen,onClose}) => {
  const [distance, setDistance] = useState("16 km")
  const [persons, setPersons] = useState(1)
  const [slot, setSlot] = useState("")
    const getPrice=()=>{
    const priceMap={
      "16 km":1000,
      "25 km":1300,
      "35 km":1500,
    };
    return priceMap[distance] || 0;
  }
  const totalPrice= getPrice() * persons;
  const timingSlots=["6:00 AM","7:00 AM","8:00 AM","9:00 AM"];

  return (  
    <div className={`form-box ${isMobileFormOpen ? "slide-up-form" : ""}`}>
      <div className="header-part">
        <div className="header-content">
       <div className="heading">Ready to Ride the Rapids?</div>
           <div className="subheading">Book now or call at +91-6396518778</div>
           </div>
           <button className="close-booking-btn" onClick={onClose}>X</button>
           </div>
           <form action="">
            <div className="name">
              <div htmlFor="name" className="mobile-label">Your name</div>
            <input type="text" name="name" placeholder="Name" />
              </div>
               <div className="email">
                    <div htmlFor="email" className="mobile-label">Your email</div>
            <input type="email"name="email" placeholder="Email" />
          </div>
            <div className="row-1">
                  <div htmlFor="contact" className="mobile-label">Your contact number</div>
                  <div className="row-inputs">
              <input type="text" value="+91"readOnly className="country-code" />
              <input type="tel" name="contact" placeholder="Contact number" />
              </div>
            </div>
            <div className="row">
              <div className="input-date">
                  <div htmlFor="date" className="mobile-label">Select date</div>
              <input type="date" name="date" placeholder="Choose a date" />
              </div>
              <div className="input-persons">
                  <div htmlFor="persons" className="mobile-label">Number of peoples</div>
              <input type="number" name="persons" placeholder="No. of peoples" value={persons} onChange={(e)=> setPersons(Number(e.target.value))} min={1}  />
              </div>
            </div>
            <div className="rafting-selection">
                <div className="distance-section">
                <span>Rafting Distance</span>
    <div className="distance">
        <button type='button' className={distance === "16 km" ? "active" : ""} onClick={()=>setDistance("16 km")}>16 km</button>
        <button type='button'  className={distance === "25 km" ? "active" : ""} onClick={()=>setDistance("25 km")}>25 km</button>
        <button type='button'  className={distance === "35 km" ? "active" : ""} onClick={()=>setDistance("35 km")}>35 km</button>
 
    </div>
    </div>
    <div className="slot-section">
    <span>Select slot</span>
    <div className="slots">
{timingSlots.map((time)=>(
<button className={slot === time ? "slot active" : "slot"} onClick={()=>setSlot(time)} type='button'> {time}</button>
))}
    </div>
    </div>
    <div className="total-price">
      {distance} (₹{getPrice()}) x {persons} = ₹{totalPrice}
      </div>
            </div>
          <div className="textarea">  <input type="text" name="text-area" placeholder="Message" /></div>
            <button className="btn-orange-2">Enquiry</button>
            <button className="btn-orange-2" type="submit">Pay ₹{totalPrice}</button>
           </form>
    </div>
  )
}

export default RaftingBookingForm