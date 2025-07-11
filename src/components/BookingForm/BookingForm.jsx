import React from "react";

const BookingForm = () => {
  return (
    <>
<div className="form-box">
   <div className="heading">Book Valley of flower trip</div>
       <div className="subheading">by filling the following information</div>
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
      <div className="textarea">  <input type="text" name="text-area" placeholder="Message" /></div>
        <button className="btn-orange-2">Enquiry</button>
        <button className="btn-orange-2" type="submit">Pay and Book your seat now</button>
       </form>
</div>
      
    </>
  );
};

export default BookingForm;
