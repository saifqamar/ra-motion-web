import React from "react";
import { useState } from "react";



const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);  

    const showlist =  () => {
        isSmallScreen ? setIsSmallScreen(false): setIsSmallScreen(true);
    }

    return(
        <div className={isSmallScreen ? "header-sec small-sec": 'header-sec'}>
            <div className=" header column">
                <div className="right">
                    <img src="ramotion.jpg" alt="" />
                    {isSmallScreen?
                        <button class="nav-toggle" onClick={showlist}>
                            close<i class="fa-solid fa-bars"></i>
                        </button>
                        :
                        <button class="nav-toggle" onClick={showlist}>
                            Menu<i class="fa-solid fa-bars"></i>
                        </button>
                    }
                </div>
                
                    
                <ul className={isSmallScreen ? "links": ""}>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Industries</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                
                
               
            </div>
        </div>
    )
}

export default Header;