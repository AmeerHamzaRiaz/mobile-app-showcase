import React from 'react'
import appStore from '../images/appstore.png';
import playStore from '../images/playstore.png';
import heroImg from '../images/cropped.png'

const DownloadApp = () => {
    return (
        <div id="GetAppNow" className="container-fluid try-app">
            <div className="container">
                <br /> <br />
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <img
                            id="croppedImg"
                            className="phone-cropped mx-auto d-block"
                            src={heroImg}
                        />
                    </div>
                    <div className="col-lg-8 col-sm-12 my-auto">
                        <h1 id="try-heading" className="jumbotron-heading">Try SWVL Right now</h1>
                        <p className="jumbotron-p">
                            Forget about the rush hours, traffic, terrible driving habits, and unavailable parking spots!
                        </p>
                        <div className="store-btn-div">
                            <img className="store-btn" src={playStore} />
                            <img className="store-btn" src={appStore} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp
