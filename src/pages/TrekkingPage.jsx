import React from "react";
import SubtitleTag from "../components/SubtitleTag/SubtitleTag";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import BookingForm from "../components/BookingForm/BookingForm";
import PriceBox from "../components/PriceBox/PriceBox";
import ValleyDetails from "../components/ValleyDetails/ValleyDetails";
import ItenaryTabs from "../components/ItenaryTabs/ItenaryTabs";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import HighlightedText from "../components/HighlightedText/HighlightedText";
import img from "../assets/sample.jpg";
import img2 from "../assets/main-image.jpg";
import img3 from "../assets/footer.png";
import img4 from "../assets/main-image.jpg";
import img5 from "../assets/logo.jpg";
import img6 from "../assets/ValleyOfFLowers.png";
import img7 from "../assets/sample2.png";


const images = [img, img2, img3, img4, img5, img6, img7];

const TrekkingPage = () => {
  const dateCards = [
    {
      date: "20th May 2025",
      desc: "Wander through a valley where every step blooms with color and serenity.",
      image: img,
    },
    {
      date: "27th May 2025",
      desc: "Wander through a valley where every step blooms with color and serenity.",
      image: img2,
    },
    {
      date: "27th May 2025",
      desc: "Wander through a valley where every step blooms with color and serenity.",
      image: img2,
    },
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
              <div className="rating">
                4.9{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.15316 3.40838C8.4198 1.13613 9.0531 0 10 0C10.9469 0 11.5802 1.13612 12.8468 3.40837L13.1745 3.99623C13.5345 4.64193 13.7144 4.96479 13.9951 5.17781C14.2757 5.39083 14.6251 5.4699 15.3241 5.62805L15.9605 5.77203C18.4201 6.32856 19.65 6.60682 19.9426 7.54773C20.2352 8.4886 19.3968 9.4691 17.7199 11.4299L17.2861 11.9372C16.8096 12.4944 16.5713 12.773 16.4641 13.1177C16.357 13.4624 16.393 13.8341 16.465 14.5776L16.5306 15.2544C16.7841 17.8706 16.9109 19.1787 16.1449 19.7602C15.3788 20.3417 14.2273 19.8115 11.9243 18.7512L11.3285 18.4768C10.6741 18.1755 10.3469 18.0248 10 18.0248C9.6531 18.0248 9.3259 18.1755 8.6715 18.4768L8.0757 18.7512C5.77268 19.8115 4.62118 20.3417 3.85515 19.7602C3.08912 19.1787 3.21588 17.8706 3.4694 15.2544L3.53498 14.5776C3.60703 13.8341 3.64305 13.4624 3.53586 13.1177C3.42868 12.773 3.19043 12.4944 2.71392 11.9372L2.2801 11.4299C0.603252 9.4691 -0.235178 8.4886 0.0574219 7.54773C0.350022 6.60682 1.57986 6.32856 4.03954 5.77203L4.67589 5.62805C5.37485 5.4699 5.72433 5.39083 6.00494 5.17781C6.28555 4.96479 6.46553 4.64194 6.82547 3.99623L7.15316 3.40838Z"
                    fill="#F37002"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="trek-side-carousel">
            <CardCarousel items={dateCards} variant="date" />
          </div>
        </div>
      </div>
      {/* for the mobile view */}
         <div className="trek-highlight">
        {" "}
        <HighlightedText text={"Choose the perfect\n timing"} />
      </div>
      <div className="trek-side-carousel-mobile">
<CardCarousel items={dateCards} variant="date" />
      </div>
        <div className="trek-highlight">
        {" "}
        <HighlightedText text={"Choose the perfect\n timing"} />
      </div>
      {/* {desktop view} */}
      <div className="imagecarousel-container">
        <ImageCarousel images={images} />
      </div>
      <div className="details">
        <div className="valley-details">
          <ValleyDetails />
          <ItenaryTabs />
        </div>
        <div className="booking-one">
          <PriceBox price={20000} originalprice={26000} />
          <BookingForm />
        </div>
      </div>
    </>
  );
};

export default TrekkingPage;
