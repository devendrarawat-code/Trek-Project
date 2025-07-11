import React from "react";

const SubtitleTag = ({ label }) => {
  return (
    <>
      <div className="subtitle-tag"  >
        <div className="tag-label">{label}</div>
        <div className="tag-icon">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M1 6.25C0.58579 6.25 0.25 6.5858 0.25 7C0.25 7.4142 0.58579 7.75 1 7.75V6.25ZM1 7.75H17V6.25H1V7.75Z"
              fill="white"
            />
            <path
              d="M11 1L17 7L11 13"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SubtitleTag;
