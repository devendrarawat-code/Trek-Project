import React from 'react'
import SubtitleTag from "../components/SubtitleTag/SubtitleTag";
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';
import BookingForm from '../components/BookingForm/BookingForm';
import PriceBox from '../components/PriceBox/PriceBox';
import ValleyDetails from '../components/ValleyDetails/ValleyDetails';
import ItenaryTabs from '../components/ItenaryTabs/ItenaryTabs';
import CardCarousel from '../components/CardCarousel/CardCarousel';
import img from "../assets/sample.jpg"
import img2 from "../assets/main-image.jpg"
import img3 from "../assets/footer.png"
import img4 from "../assets/main-image.jpg"
import img5 from "../assets/logo.jpg"
import img6 from "../assets/ValleyOfFLowers.png"
import img7 from "../assets/sample2.png"

  const images = [
  img,img2,img3,img4,img5,img6,img7
  ];

const TrekkingPage = () => {

  const dateCards = [
  {
    date: '20th May 2025',
    desc: 'Wander through a valley where every step blooms with color and serenity.',
    image: img
  },
  {
    date: '27th May 2025',
    desc: 'Wander through a valley where every step blooms with color and serenity.',
    image: img2
  },
  {
    date: '27th May 2025',
    desc: 'Wander through a valley where every step blooms with color and serenity.',
    image: img2
  }
];
  return (
 <>
  <div className="main">
        <div className="trek-hero-section">
          <span className="trek-headline-1"> Valley of Flower</span> <br />
          <span className="trek-headline-2">
          A Trail of Flowers, A Journey <br /> to Peace.
          </span>
        <div className="trek-subtitle-container">
        <SubtitleTag label="Book Now" className={SubtitleTag} />
        </div>
        <div className="trek-trustbox-container">
        <div className="trek-trust-box">
            <div className="circle-box">
              <div className="circle first"></div>
              <div className="circle second"></div>
              <div className="circle third"></div>
            </div>
            <div className="box-heading">
              Trusted by 200+ <br /> Happy Clients
            </div>
            <div className=" trek-rating">4.9</div>
          </div>
        </div>
        <div className="side-carousel">
       <CardCarousel items={dateCards} variant="date" />
        </div>
        </div>
      </div>
        <div className="imagecarousel-container">
          <ImageCarousel images={images} />
        </div>
      <div className="details">
        <div className="valley-details">
         <ValleyDetails/>
 <ItenaryTabs/>
        </div>
        <div className="booking-one">
          <PriceBox price={20000} originalprice={26000}/>
          <BookingForm/>
        </div>
    

      </div>
      
    
 </>
  )
}

export default TrekkingPage