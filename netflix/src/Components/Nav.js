import React, { useEffect, useState, handleShow } from "react";
import '../styles/Nav.css';
import logo from "../images/logo.png";
import logo2 from "../images/N_logo.png";

function Nav() {
    const [ show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            {/*<img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/480px-Netflix-new-icon.png?uselang=ko" alt="Netflix Logo" />*/}
            <img className="nav__logo" src={logo2} alt="Netflix Logo" width="80px" height="50px"/>
            <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix Logo" />
        </div>
    )
}

export default Nav