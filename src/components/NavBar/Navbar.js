import { useState } from "react";
import React from "react";
import Classes from "./Navbar.module.css";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownhelpOpen, setDropdownhelpOpen] = useState(false);
    const openDropdown = () => {
      setDropdownOpen(true);
    };
  
    const closeDropdown = () => {
      setDropdownOpen(false);
    };
    const openDropdownhelp = () => {
        setDropdownhelpOpen(true);
      };
    
      const closeDropdownhelp = () => {
        setDropdownhelpOpen(false);
      };
  return (
    <div className={Classes.navbarEase}>
      <div className={Classes.navClickSection}>
        <div className={Classes.navContent}>
          <div className={Classes.navLogoSection}>
            <img
              className={Classes.logoEase}
              src="https://www.easemytrip.com/images/brandlogo/emtlogo_new6.svg"
              alt="logo Image"
            />
          </div>
          <div className={Classes.navRouteContent}>
            <div className={Classes.clickSection}>
              <h3 className={Classes.clickH3}>FLIGHTS</h3>
              <small className={Classes.clickH2}>|</small>
              <h3 className={Classes.clickH3}>HOTELS</h3>
              <h2 className={Classes.clickH2}>|</h2>
              <h3 className={Classes.clickH3}>TRAINS</h3>
              <h2 className={Classes.clickH2}>|</h2>
              <h3 className={Classes.clickH3}>BUS</h3>
              <h2 className={Classes.clickH2}>|</h2>
              <h3 className={Classes.clickH3}>HOLIDAYS</h3>
              
            </div>
          </div>
          <div className={Classes.navJoinSection}>
            <img
              className={Classes.joinIcon}
              src="https://www.easemytrip.com/emt-pro/img/emtpro-header-icon.svg"
              alt="Join Icon"
            />
          </div>
        </div>
      </div>
      <div className={Classes.navUser}>
        <div className={Classes.navUserInfo}>
        <div className={Classes.myhelp}
        onMouseEnter={openDropdownhelp}
        onMouseLeave={closeDropdownhelp}
        >
            
          <div className={Classes.helpIconNav}>
            <img
              className={Classes.help}
              src="https://www.easemytrip.com/images/common/home-sub-sprite.png"
              alt="profile"
            />
          </div>
          <div className={Classes.navhelp}>
          <p>24x7 Helpline</p>
                {isDropdownhelpOpen && (
                  <div className={Classes.dropdownhelpContent}
                  onMouseEnter={openDropdownhelp}
                    onMouseLeave={closeDropdownhelp}
                    >
                    <div className={Classes.helpbox}>  
                    <div className={Classes.tellNo24x7}>
                    <p className={Classes.telNo}>Tel: 010 - 49313213</p>
                    </div>
                    <Divider className={Classes.divider24x7}/>
                    <div className={Classes.helpEmail}>
                    <p>Care@gmail.com</p>
                    </div>
                   
                    </div> 
                  </div>
                )}
          </div>
        
      </div>
      <div></div>
        </div>
      
        <div className={Classes.myAcount}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        >
            
          <div className={Classes.userIconNav}>
            <img
              className={Classes.iconMan}
              src="https://www.easemytrip.com/images/common/home-sub-sprite.png"
              alt="profile"
            />
          </div>
          <div className={Classes.navAcount}>
          <p>My Account</p>
                {isDropdownOpen && (
                  <div className={Classes.dropdownContent}
                  onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    >
                    <div className={Classes.accountBox}>
                      <div className={Classes.avatar}>
                      <Avatar/>
                        </div>  
                    <div className={Classes.loginBtnSection}>
                    <button className={Classes.btnLogin}>LOGIN OR SIGNUP</button>
                    </div>
                    
                    <Divider className={Classes.dividerLogin}/>
                    <p>My Booking</p>
                    <p>Print/Cancel Booking</p>
                    </div> 
                  </div>
                )}
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Navbar;
