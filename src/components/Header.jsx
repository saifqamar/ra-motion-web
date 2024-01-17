import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from "react-router-dom";



const Header = (props) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false); 
    
    // const isDark = props.isDark ? headerBack[0].style.background = '#000' : headerBack[0].style.background = '#fff';
    useEffect(() => {
        const headerBack = document.getElementById('header-sec');
        console.log(headerBack.classList)
        const isDark = props.isDark ?  headerBack.classList.add('bg-neutral-950') : headerBack.classList.add('');

    },[])
    
    

    const showlist =  () => {
        isSmallScreen ? setIsSmallScreen(false): setIsSmallScreen(true);
    }

    return(
        <div id="header-sec" className={isSmallScreen ? "header-sec small-sec": 'header-sec'}>
            <div className=" header column">
                <div className="right">
                    <img src="ramotion.jpg" alt="" />
                    {isSmallScreen?
                        <button class="nav-toggle" onClick={showlist}>
                            close<FontAwesomeIcon className="icon-menu" icon={icon({name: 'xmark', style: 'solid'})} />
                        </button>
                        :
                        <button class="nav-toggle" onClick={showlist}>
                            Menu<FontAwesomeIcon className="icon-menu" icon={icon({name: 'bars', style: 'solid'})} />
                        </button>
                    }
                </div>
                
                    
                <ul className={isSmallScreen ? "links": ""}>
                    <li><a href="#">Work</a></li>
                    <li><Link to="b2b">Industries</Link></li>
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