import React from 'react'

const RaftingBookingForm = () => {
  return (
    <>
    <div className="form-box">
   <div className="heading">Ready to Ride the Rapids?</div>
       <div className="subheading">Book now or call at +91-6396518778</div>
       <form action="">
        <div className="name">
        <input type="text" name="name" placeholder="Name" />
          </div>
           <div className="email">
        <input type="email"name="email" placeholder="Email" />
      </div>
        <div className="row">
          <input type="text" value="+91"readOnly className="country-code" />
          <input type="tel" name="contact" placeholder="Contact number" />
        </div>
        <div className="row">
          <input type="date" name="date" placeholder="Date" />
          <input type="number" name="peoples" placeholder="No. of peoples" />
        </div>
        <div className="rafting-selection">
            <div className="distance-section">
            <span>Rafting Distance</span>
<div className="distances">
    <button>16 km</button>
    <button>25 km</button>
    <button>35 km</button>
</div>
</div>
<div className="slot-section">
<span>Select slot</span>
<div className="slots">
    <button className='slot-timing'>6:00 AM</button>
    <button className='slot-timing'>7:00 AM</button>
    <button className='slot-timing'>8:00 AM</button>
    <button className='slot-timing'>9:00 AM</button>
</div>
</div>
<div className="total-price">16 km (₹1,000) x 2 adults = ₹2,000</div>
        </div>
      <div className="textarea">  <input type="text" name="text-area" placeholder="Message" /></div>
        <button className="btn-orange-2">Enquiry</button>
        <button className="btn-orange-2" type="submit">Pay ₹2,000</button>
       </form>
</div>
    </>
  )
}

export default RaftingBookingForm