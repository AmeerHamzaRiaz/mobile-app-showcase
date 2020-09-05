import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/Swvl_logo-no_background-white.png';

const Nav = () => {
    let navRef = useRef(null);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            if (e.target.documentElement.scrollTop > navRef.current.clientHeight) { setIsScroll(true); }
            else { setIsScroll(false); }
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, []);


    return (
        <nav ref={navRef} className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top ${isScroll ? "scrolled" : ""}`}>
            <a className="navbar-brand" href="#">
                <img
                    src={logo}
                    height="25"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </a>

            <div className="d-flex flex-row order-2 order-lg-3">
                <ul className="navbar-nav flex-row">
                    <li className="nav-item">
                        <a className="nav-link px-2" href="#"><span className="fab fa-facebook"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="#"><span className="fab fa-twitter"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="#"><span className="fab fa-instagram"></span></a>
                    </li>
                </ul>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                >
                    <span className="navbar-toggler-icon"> </span>
                </button>
            </div>

            <div
                className="collapse navbar-collapse order-3 order-lg-2"
                id="navbarNavDropdown"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#Locations">Locations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#GetAppNow">Get App Now</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
