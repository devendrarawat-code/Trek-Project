import React from 'react'
import SubtitleTag from "../components/SubtitleTag/SubtitleTag";
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import img from "../assets/sample.jpg"
import img2 from "../assets/main-image.jpg"
import img3 from "../assets/footer.png"
import img4 from "../assets/main-image.jpg"
import img5 from "../assets/logo.jpg"
import img6 from "../assets/ValleyOfFLowers.png"
import img7 from "../assets/sample2.png"
import RaftingCards from '../components/CardCarousel/RaftingCards';
import BookingForm from '../components/BookingForm/BookingForm';
import PriceBox from '../components/PriceBox/PriceBox';
import ValleyDetails from '../components/ValleyDetails/ValleyDetails';
import ItenaryTabs from '../components/ItenaryTabs/ItenaryTabs';
import RaftingDetails from '../components/RaftingDetails/RaftingDetails';
import Footer from '../components/Footer/Footer';
import RaftingBookingForm from '../components/RaftingBookingForm/RaftingBookingForm';

const Raftingpage = () => {
    const images = [
    img,img2,img3,img4,img5,img6,img7
    ];
  const raftingCards=[
    {
      image:img5,
distance: "16 km",
price:"Rs.1,000",
desc:"Get ready for 16 kilometers of thrilling rapids, stunning river views."
    },
    {
      image:img6,
distance: "25 km",
price:"Rs.1,500",
desc:"Get ready for 25 kilometers of thrilling rapids, stunning river views."
    },
    {
      image:img7,
distance: "35 km",
price:"Rs.2,500",
desc:"Get ready for 35 kilometers of thrilling rapids, stunning river views."
    },
  ]
  return (
<>
<div className="main">
        <div className="rafting-hero-section">
          <span className="rafting-headline-1">River Rafting
            </span> <br />
          <span className="rafting-headline-2">
         Where roaring rivers meet <br /> fearless hearts.
          </span>
            <div className="rafting-subtitle-container">
        <SubtitleTag label="Book Now" className={SubtitleTag} />
        </div>
        <div className="rafting-side-carousel">
    {raftingCards.map((item, index) => (
      <RaftingCards key={index} image={item.image} distance={item.distance} price={item.price} desc={item.desc}/>
    ))}
        </div>
        </div>
      </div>
    <div className="imagecarousel-container">
          <ImageCarousel images={images} />
        </div>
          <div className="details">
        <div className="rafting-details">
          <RaftingDetails/>
        </div>
        <div className="booking-one">
          <PriceBox price={1000} originalprice={1500}/>
  <RaftingBookingForm/>
        <div className="rafting-trust-box">
            <div className="circle-box">
              <div className="circle first"></div>
              <div className="circle second"></div>
              <div className="circle third"></div>
            </div>
            <div className="box-heading">
              Trusted by 200+ Happy Clients
            </div>
            <div className=" trek-rating">4.9</div>
          </div>
          <div className="discount-box">
            <div className="discount-title">Big Group</div>
            <div className="discount-subtitle">Get Upto 50% Discount</div>
            <hr />
            <button>Request a callback</button>
          </div>
        </div>
      </div>
     
      <Footer/>
</>
  )
}

export default Raftingpage