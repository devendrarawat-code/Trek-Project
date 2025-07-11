import React, { useRef } from "react";

const ImageCarousel = ({images=[]}) => {

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;
    const scrollAmount = 200;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="carousel-grid">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75V11.25ZM20 12.75H4V11.25H20V12.75Z"
              fill="white"
            />
            <path
              d="M10 6L4 12L10 18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="carousel" ref={carouselRef}>
          {images.map((img,index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt="slide" />
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM4 12.75H20V11.25H4V12.75Z"
              fill="white"
            />
            <path
              d="M14 6L20 12L14 18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
