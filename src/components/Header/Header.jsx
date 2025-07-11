import React from "react";
import { useState } from "react";
const Header = () => {
  const [activeLink, setactiveLink] = useState("HOME");
  const handleLinkClick = (link) => {
    setactiveLink(link);
  };
  return (
    <>
      <nav className="header"> 
        <div className="img-text">
          <img src="src/assets/logo.jpg" alt="logo-image" className="logo-image" />
        <div className="logo-name">IBEX ICEAXE</div>
        </div>
        <input type="checkbox" id="menu-toggle" hidden />
       <div className="menu-icon">
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H17M1 7H17M1 13H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<div className="close-icon">
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.96967 16.9697C6.67678 17.2626 6.67678 17.7374 6.96967 18.0303C7.26256 18.3232 7.73744 18.3232 8.03033 18.0303L6.96967 16.9697ZM13.0303 13.0303C13.3232 12.7374 13.3232 12.2626 13.0303 11.9697C12.7374 11.6768 12.2626 11.6768 11.9697 11.9697L13.0303 13.0303ZM11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303C12.2626 13.3232 12.7374 13.3232 13.0303 13.0303L11.9697 11.9697ZM18.0303 8.03033C18.3232 7.73744 18.3232 7.26256 18.0303 6.96967C17.7374 6.67678 17.2626 6.67678 16.9697 6.96967L18.0303 8.03033ZM13.0303 11.9697C12.7374 11.6768 12.2626 11.6768 11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303L13.0303 11.9697ZM16.9697 18.0303C17.2626 18.3232 17.7374 18.3232 18.0303 18.0303C18.3232 17.7374 18.3232 17.2626 18.0303 16.9697L16.9697 18.0303ZM11.9697 13.0303C12.2626 13.3232 12.7374 13.3232 13.0303 13.0303C13.3232 12.7374 13.3232 12.2626 13.0303 11.9697L11.9697 13.0303ZM8.03033 6.96967C7.73744 6.67678 7.26256 6.67678 6.96967 6.96967C6.67678 7.26256 6.67678 7.73744 6.96967 8.03033L8.03033 6.96967ZM8.03033 18.0303L13.0303 13.0303L11.9697 11.9697L6.96967 16.9697L8.03033 18.0303ZM13.0303 13.0303L18.0303 8.03033L16.9697 6.96967L11.9697 11.9697L13.0303 13.0303ZM11.9697 13.0303L16.9697 18.0303L18.0303 16.9697L13.0303 11.9697L11.9697 13.0303ZM13.0303 11.9697L8.03033 6.96967L6.96967 8.03033L11.9697 13.0303L13.0303 11.9697Z" fill="black"/>
</svg>
</div>
       </div>
        <ul className="nav-links">
          {['Home', "Trekking", "Rafting", "Rental"].map((link) => (
            <li
              key={link}
              className={activeLink == link ? "active" : ""}
              onClick={() => handleLinkClick(link)}
            > {link}</li>
          ))}
        </ul>
        <button className="login-btn">LOGIN</button>
      </nav>
    </>
  );
};

export default Header;
