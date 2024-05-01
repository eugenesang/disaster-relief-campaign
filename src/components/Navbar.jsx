import React from 'react';

import logo from "../assets/logo.png";
import galleryIcon from "../assets/icons/gallery.svg";

const Navbar = () => {
    return ( 
        <nav>
            <div className="brand">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="name">
                    <span className="name1">Donor's</span>
                    <span className="name2">Book</span>
                </div>
            </div>
            <div className="center-piece">
                <a href='#gallery' >
                    <img src={galleryIcon} alt="gallery" />
                </a>
            </div>
            <div className="donate">
                <button className="donate-btn">
                    Make Donation
                </button>
            </div>
        </nav>
     );
}
 
export default Navbar;