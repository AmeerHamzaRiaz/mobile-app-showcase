import React from 'react'
import Kenya from '../images/008-kenya.png'
import Pakistan from '../images/001-pakistan.png'
import Egypt from '../images/010-egypt-2.png'

const Locations = () => {
    return (
        <div id="Locations" className="container text-center">
            <br /><br /><br />
            <h1 className="section-heading">Locations</h1>
            <p className="section-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam
            </p>

            <div className="row">
                <div className="col-sm-4">
                    <img className="location-img" alt="locksmith" src={Pakistan} />
                    <h4 className="feature-heading">Pakistan</h4>
                    <p className="feature-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor
                    </p>
                </div>
                <div className="col-sm-4">
                    <img className="location-img" alt="plumber" src={Egypt} />
                    <h4 className="feature-heading">Egypt</h4>
                    <p className="feature-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor
                    </p>
                    <p className="feature-p"></p>
                </div>

                <div className="col-sm-4">
                    <img className="location-img" alt="puncture" src={Kenya} />
                    <h4 className="feature-heading">Kenya</h4>
                    <p className="feature-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor
                    </p>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default Locations
