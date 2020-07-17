import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"> 
            <a href="/">
                <img 
                src="https://i.imgur.com/7bs4i1k.png"
                alt="smile trust logo"
                />
            </a>
            </div>
            <div className="donate-btn"> <a href ="https://mthsmile.com/donate/" alt="donate button" >
                <button>DONATE</button>
                 </a>
                </div>
            <div className="hamb-menu"> 
            <img src="https://i.imgur.com/GcFaQ2z.png"
            alt="menu dropdown"
            />
           
            </div>
            
        </div>
    );
};

export default Navbar;
