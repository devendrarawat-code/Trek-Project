import React, { useRef } from "react";
import RaftingCards from "./RaftingCards";
const CardCarousel = ({ items, variant = "default" }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  const renderCardContent = (item) => {
    if (variant === "rafting") {
      return (
         <RaftingCards/>
      );
    }

    if (variant === "date") {
      return (
        <>
          <div className="card">
            <div className="image-box">
<img src={item.image} alt="" />
            </div>
            <div className="description">
              <div className="upper-info">{item.date}</div>
              <div className="info">{item.desc}</div>
              <button className="book-button mobile-only"> Book Now</button>
            </div>
          </div>
        </>
      );
    }

    return <div>Unknown card</div>;
  };

  return (
    <>
      <div className="button-section">
        <button
          style={{ backgroundColor: "white" }}
          className="scroll-btn leftone"
          onClick={() => scroll("left")}
        >
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
              fill="black"
            />
            <path
              d="M10 6L4 12L10 18"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          style={{ backgroundColor: "white" }}
          className="scroll-btn rightone"
          onClick={() => scroll("right")}
        >
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
              fill="black"
            />
            <path
              d="M14 6L20 12L14 18"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="carousel-track" ref={scrollRef}>
        {items.map((item, index) => (
          <div className="carousel-card" key={index}>
            {renderCardContent(item)}
          </div>
        ))}
      </div>
      </>
  );
};

export default CardCarousel;
