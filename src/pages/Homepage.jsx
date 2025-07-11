import React from "react";
import Header from "../components/Header/Header";
import CategoryCardSelection from "../components/CategoryCardSelction/CategoryCardSelection";
import AdventureCards from "../components/AdventureCards/AdventureCards";
import HighlightedText from "../components/HighlightedText/HighlightedText";
import ReviewCards from "../components/ReviewCards/ReviewCards";
import Footer from "../components/Footer/Footer";
import TrustBox from "../components/TrustBox/TrustBox";
import SubtitleTag from "../components/SubtitleTag/SubtitleTag";


import img from '../assets/sample.jpg'
import img2 from '../assets/main-image.jpg'
import img3 from '../assets/ValleyOfFlowers.png'
const Homepage = () => {
  const categoryData = [
    {
      title: "Trekking",
      image: "src/assets/sample.jpg",
      descriptions:
        "Explore breathtaking trails and hidden gems with our guided treks. Perfect for nature lovers and thrill-seekers alike.",
    },
    {
      title: "Rafting",
      image: "src/assets/main-image.jpg",
      descriptions:
        "Explore breathtaking trails and hidden gems with our guided treks. Perfect for nature lovers and thrill-seekers alike.",
    },

    {
      title: "Rental",
      image: "src/assets/main-image.jpg",
      descriptions:
        "Explore breathtaking trails and hidden gems with our guided treks. Perfect for nature lovers and thrill-seekers alike.",
    },
  ];
  const trekkingPackageData = [
    {
      photo: [img,img2],
      duration: "5 Days & 4 Nights",
      title: "Trails of Meghalaya | Lakes, Falls and Root Bridges",
      rating: 4.7,
      reviewCount: 199,
      price: 20000,
      originalPrice: 260000,
    },
    {
   photo: [img,img2,img3],
      duration: "5 Days & 4 Nights",
      title: "Trails of Meghalaya | Lakes, Falls and Root Bridges",
      rating: 4.7,
      reviewCount: 199,
      price: 20000,
      originalPrice: 260000,
    },
    {
        photo: [img,img2],
      duration: "5 Days & 4 Nights",
      title: "Trails of Meghalaya | Lakes, Falls and Root Bridges",
      rating: 4.7,
      reviewCount: 199,
      price: 20000,
      originalPrice: 260000,
    },
    {
        photo: [img,img2],
      duration: "5 Days & 4 Nights",
      title: "Trails of Meghalaya | Lakes, Falls and Root Bridges",
      rating: 4.7,
      reviewCount: 199,
      price: 20000,
      originalPrice: 260000,
    },
  ];

  const rapidsPackageData = [
    {
        photo: [img,img2],
      duration: "12 KM River Rafting",
      title: "Thrill-seekers, meet your 12 KM adventure challenge.",
      rating: 4.7,
      reviewCount: 199,
      price: 800,
      originalPrice: 1000,
    },
    {
  photo: [img,img2],
      duration: "26 KM River Rafting",
      title: "Thrill-seekers, meet your 12 KM adventure challenge.",
      rating: 4.7,
      reviewCount: 199,
      price: 1200,
      originalPrice: 1600,
    },
    {
  photo: [img,img2],
      duration: "36 KM River Rafting",
      title: "Thrill-seekers, meet your 12 KM adventure challenge.",
      rating: 4.7,
      reviewCount: 199,
      price: 1600,
      originalPrice: 2000,
    },
  ];
  const ridersPackageData = [
    {
        photo: [img,img2],
      duration: "Bike on rent",
      title: "Discover new roads with our easy and reliable bike rentals",
      rating: 4.7,
      reviewCount: 199,
      price: 1000,
      originalPrice: 1700,
    },
    {
        photo: [img,img2],
      duration: "Scooty on rent",
      title: "Discover new roads with our easy and reliable bike rentals",
      rating: 4.7,
      reviewCount: 199,
      price: 1800,
      originalPrice: 2600,
    },
    {
       photo: [img,img2],
      duration: "Car on rent",
      title: "Discover new roads with our easy and reliable bike rentals",
      rating: 4.7,
      reviewCount: 199,
      price: 3600,
      originalPrice: 4000,
    },
  ];
  const reviews = [
    {
      review:
        "Absolutely unforgettable experience! From the breathtaking trek to the heart-pounding rafting and the freedom of exploring on a bike, everything was perfectly organized. The team was super professional, friendly, and made sure we were safe and comfortable throughout.",
      name: "Ankit Pundir",
      activityName: "26 KM River Rafting",
    },
    {
      review:
        "Absolutely unforgettable experience! From the breathtaking trek to the heart-pounding rafting and the freedom of exploring on a bike, everything was perfectly organized. The team was super professional, friendly, and made sure we were safe and comfortable throughout.",
      name: "Ankit Pundir",
      activityName: "26 KM River Rafting",
    },
    {
      review:
        "Absolutely unforgettable experience! From the breathtaking trek to the heart-pounding rafting and the freedom of exploring on a bike, everything was perfectly organized. The team was super professional, friendly, and made sure we were safe and comfortable throughout.",
      name: "Ankit Pundir",
      activityName: "26 KM River Rafting",
    },
    {
      review:
        "Absolutely unforgettable experience! From the breathtaking trek to the heart-pounding rafting and the freedom of exploring on a bike, everything was perfectly organized. The team was super professional, friendly, and made sure we were safe and comfortable throughout.",
      name: "Ankit Pundir",
      activityName: "26 KM River Rafting",
    },
    {
      review:
        "Absolutely unforgettable experience! From the breathtaking trek to the heart-pounding rafting and the freedom of exploring on a bike, everything was perfectly organized. The team was super professional, friendly, and made sure we were safe and comfortable throughout.",
      name: "Ankit Pundir",
      activityName: "26 KM River Rafting",
    },
    {
      review:
        "Absolutely unforgettable experience! From the breathtaking trek to the heart-pounding rafting and the freedom of exploring on a bike, everything was perfectly organized. The team was super professional, friendly, and made sure we were safe and comfortable throughout.",
      name: "Ankit Pundir",
      activityName: "26 KM River Rafting",
    },
  ];
   
  return (
    <>
      <div className="main">
        <Header />
        <div className="hero-section">
          <span className="headline-1"> Trek Raft Ride</span> <br />
          <span className="headline-2">
            Ride Waves, Climb Peaks, <br /> Explore
          </span>
          <div className="subtitle-container">
        <SubtitleTag label="Trekking"/>
          </div>
          <div className="trustbox-container">
        <TrustBox/>
        </div>
        </div>
      </div>
      <HighlightedText text={"Find your perfect\nEscape"} />
      <div className="card-selection">
        {categoryData.map((category) => (
          <CategoryCardSelection
            key={category.title}
            title={category.title}
            image={category.image}
            descriptions={category.descriptions}
          />
        ))}
      </div>
      <HighlightedText text={"Your Trekking Journey\nBegins"} />
      <div className="package-section-trekking">
          <div className="inner">
          {trekkingPackageData.map((card, index) => (
            <AdventureCards
              key={index}
              photo={card.photo}
              duration={card.duration}
              title={card.title}
              rating={card.rating}
              reviewcount={card.reviewCount}
              price={card.price}
              originalPrice={card.originalPrice}
            />
          ))}
      </div>
      </div>
      <HighlightedText text={"Ride the Rapids \nWith Us"} />
      <div className="package-section-rapids">
      
          {rapidsPackageData.map((card, index) => (
            <AdventureCards
              key={index}
              photo={card.photo}
              duration={card.duration}
              title={card.title}
              rating={card.rating}
              reviewcount={card.reviewCount}
              price={card.price}
              originalPrice={card.originalPrice}
            />
          ))}
        </div>
      <HighlightedText text={"Riders, meet your perfect \nroad companion."} />
      <div className="package-section-rapids">
          {ridersPackageData.map((card, index) => (
            <AdventureCards
              key={index}
              photo={card.photo}
              duration={card.duration}
              title={card.title}
              rating={card.rating}
              reviewcount={card.reviewCount}
              price={card.price}
              originalPrice={card.originalPrice}
            />
          ))}
        </div>
      <HighlightedText
        text={"Trusted by over 200 clients, \nwho chose adventure with us."}
      />
      <div className="review-container">
        <div className="reviewcard-grid">
          {reviews.map((card, index) => (
            <ReviewCards
              key={index}
              review={card.review}
              name={card.name}
              activityName={card.activityName}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
