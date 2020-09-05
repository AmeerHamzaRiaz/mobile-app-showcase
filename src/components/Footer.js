import React from 'react'
import logo from '../images/Swvl_logo-no_background-white.png';
import useWebAnimations from '@wellyshen/use-web-animations';

export const Footer = () => {
    const { ref } = useWebAnimations({
        keyframes: [
            { transform: "translateY(-10%)" },
            { transform: "translateY(0%)" },
        ],
        timing: {
            direction: "alternate-reverse",
            easing: "ease-in-out",
            duration: 2000,
            playbackRate: 1,
            iterations: Infinity
        },
    });

    return (
        <div>
            <div ref={ref} style={{ marginBottom: '-22.25%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,224L60,192C120,160,240,96,360,112C480,128,600,224,720,224C840,224,960,128,1080,85.3C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>            </div>
            <footer className="container-fluid customFooter">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="#">
                                <img
                                    width="100px"
                                    src={logo}
                                    className="d-inline-block align-top footer-logo"
                                    alt="hurryapp"
                                />
                            </a>
                        </div>
                        <div className="col">
                            <span className="social-icon">
                                <i className="nav-item nav-link fab fa-instagram float-right"></i>
                            </span>
                            <span className="social-icon">
                                <i className="nav-item nav-link fab fa-facebook-f float-right"></i>
                            </span>
                            <span className="social-icon">
                                <i className="nav-item nav-link fab fa-twitter float-right"></i>
                            </span>
                        </div>
                    </div>

                    <div className="row justify-content-md-center">
                        <div className="col-sm-4">
                            <p className="footer-content">{new Date().getFullYear()} SWVL. All Rights Reserverd.</p>
                        </div>
                        <div className="col-sm">
                            <a><p className="footer-content">Get for Android</p></a>
                        </div>
                        <div className="col-sm">
                            <p className="footer-content">Get for IOS</p>
                        </div>
                        <div className="col-sm">
                            <p className="footer-content">Privacy Policy</p>
                        </div>
                        <div className="col-sm">
                            <p className="footer-content">Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
