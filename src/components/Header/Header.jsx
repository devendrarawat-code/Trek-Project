import React from "react";
import { useState } from "react";
const Header = () => {
  const [activeLink, setactiveLink] = useState("HOME");
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const handleLinkClick = (link) => {
    setactiveLink(link);
    setsidebarOpen(true)
  };
  return (
    <>
{sidebarOpen && <div className="overlay" onClick={()=>setsidebarOpen(false)}></div>}

      <nav className="header"> 
        <div className="img-text">
          <img src="src/assets/logo.jpg" alt="logo-image" className="logo-image" />
        <div className="logo-name">IBEX ICEAXE</div>
        </div>
        {/* desktop links */}
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
{/* menu button */}
<div className="menu-icon" onClick={()=>setsidebarOpen(true)}>
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H17M1 7H17M1 13H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
      </nav>
      {sidebarOpen && ( <div className="close-icon" onClick={()=>setsidebarOpen(false)}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.969668 10.9697C0.676777 11.2626 0.676777 11.7374 0.969668 12.0303C1.26256 12.3232 1.73744 12.3232 2.03033 12.0303L0.969668 10.9697ZM7.0303 7.0303C7.3232 6.7374 7.3232 6.2626 7.0303 5.9697C6.7374 5.6768 6.2626 5.6768 5.9697 5.9697L7.0303 7.0303ZM5.9697 5.9697C5.6768 6.2626 5.6768 6.7374 5.9697 7.0303C6.2626 7.3232 6.7374 7.3232 7.0303 7.0303L5.9697 5.9697ZM12.0303 2.03033C12.3232 1.73744 12.3232 1.26256 12.0303 0.969671C11.7374 0.676781 11.2626 0.676781 10.9697 0.969671L12.0303 2.03033ZM7.0303 5.9697C6.7374 5.6768 6.2626 5.6768 5.9697 5.9697C5.6768 6.2626 5.6768 6.7374 5.9697 7.0303L7.0303 5.9697ZM10.9697 12.0303C11.2626 12.3232 11.7374 12.3232 12.0303 12.0303C12.3232 11.7374 12.3232 11.2626 12.0303 10.9697L10.9697 12.0303ZM5.9697 7.0303C6.2626 7.3232 6.7374 7.3232 7.0303 7.0303C7.3232 6.7374 7.3232 6.2626 7.0303 5.9697L5.9697 7.0303ZM2.03033 0.969671C1.73744 0.676781 1.26256 0.676781 0.969668 0.969671C0.676777 1.26256 0.676777 1.73744 0.969668 2.03033L2.03033 0.969671ZM2.03033 12.0303L7.0303 7.0303L5.9697 5.9697L0.969668 10.9697L2.03033 12.0303ZM7.0303 7.0303L12.0303 2.03033L10.9697 0.969671L5.9697 5.9697L7.0303 7.0303ZM5.9697 7.0303L10.9697 12.0303L12.0303 10.9697L7.0303 5.9697L5.9697 7.0303ZM7.0303 5.9697L2.03033 0.969671L0.969668 2.03033L5.9697 7.0303L7.0303 5.9697Z" fill="black"/>
</svg>
</div>)}
        
      {/* sidebar for the mobile */}
        <div className={`sidebar ${sidebarOpen ? "open":"close"}`}>
           <ul>
          {['Home', "Trekking", "Rafting", "Rental"].map((link) => (
            <li
              key={link}
              className={activeLink == link ? "active" : ""}
              onClick={() => handleLinkClick(link)}
            > {link}</li>
          ))}
        </ul>
        </div>
    </>
  );
};

export default Header;
