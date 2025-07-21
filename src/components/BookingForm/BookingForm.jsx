import React from "react";

const BookingForm = ({isMobileFormOpen,onClose}) => {
  return (
    <>
  <div className={`form-box ${isMobileFormOpen ? "slide-up-form" : ""}`}>
         <div className="header-part">
        <div className="header-content">
       <div className="heading">Book Valley of flower trip</div>
           <div className="subheading">by filling the following information</div>
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
              <input type="number" name="persons" placeholder="No. of peoples" min={1}  />
              </div>
            </div>
      <div className="textarea">  <input type="text" name="text-area" placeholder="Message" /></div>
        <button className="btn-orange-2">Enquiry</button>
        <button className="btn-orange-2" type="submit">Pay and Book your seat now</button>
       </form>
</div>
      
    </>
  );
};

export default BookingForm;
