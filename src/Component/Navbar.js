
import React, { useRef } from "react"
import '../Styles/Navbar.css';
import close from '../Icons/icon-close.svg'
import icon from '../Icons/icon-menu.svg';
import { Link } from "react-router-dom";


export default function Navbar() {
    function add(e) {
        alert(
           'mmmhmm'
        )
            
        
        
    }

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav")
    }
   return (
        <>
            <header>
            <button className="nav-btn " onClick={showNavbar}>
                    <img src={icon} alt="menue" />
                </button>
              <a href="/" className="logo">
                    <img src="images/logo.svg" alt="" />
                </a>
             <nav ref={navRef}>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <img src={close} alt="menue" />
                    </button>
                  <Link to="/" className="active">Collections</Link> |{" "}
                  <Link to="Men">Men</Link>
                  <Link to="Women">Women</Link>
                  <Link to="about">About</Link>
                 <Link to="contact">Contact</Link>
                  </nav>
                  <div id="span">
                    <img className="cart" src="images/icon-cart.svg" alt="cart"  onClick={add}/>
                    </div>
                    <span className="move">
                    <img className="avatar" src="images/image-avatar.png" alt="avatar" />
                    </span>
                
                        
            </header>
            <hr className="hr" />
            
        </>
    );
}
