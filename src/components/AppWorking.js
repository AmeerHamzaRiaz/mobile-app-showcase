import React, { useRef, useState, useEffect } from 'react'
import step1Img from '../images/group-13.png'
import step2Img from '../images/select-ride-screen.png'
import step3Img from '../images/confirm-book.png'
import useInterval from '../components/CustomHook';
import useWebAnimations, { pulse } from '@wellyshen/use-web-animations';

const AppWorking = () => {
    const step1TextRef = useRef(null);
    const step2TextRef = useRef(null);
    const step3TextRef = useRef(null);
    const [ImgIndex, setImgIndex] = useState(0)
    const [ImgSrcArr, setImgSrcArr] = useState([step1Img, step2Img, step3Img]);
    const { ref, getAnimation } = useWebAnimations({
        ...pulse
    });

    const step1TextAnim = useWebAnimations({
        ref: step1TextRef,
        ...pulse
    });


    const step2TextAnim = useWebAnimations({
        ref: step2TextRef,
        autoPlay: false,
        ...pulse
    });

    const step3TextAnim = useWebAnimations({
        ref: step3TextRef,
        autoPlay: false,
        ...pulse
    });

    useInterval(() => {
        setImgIndex(ImgIndex + 1)
        if (ImgIndex < ImgSrcArr.length - 1) {
            setImgIndex(ImgIndex + 1)
        }
        else {
            setImgIndex(0);
        }
        getAnimation().play();
    }, 5000)

    useEffect(() => {
        if (ImgIndex === 0) step1TextAnim.getAnimation().play();
        if (ImgIndex === 1) step2TextAnim.getAnimation().play();
        if (ImgIndex === 2) step3TextAnim.getAnimation().play();
    }, [ImgIndex])

    return (
        <div id="HowAppWorks" className="container text-center gutter">
            <br /> <br /> <br />
            <h1 className="section-heading">How the App Works?</h1>
            <p className="section-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
            <div className="container">
                <div className="row">
                    <div className="col demo-mobile-div">
                        <img ref={ref} id="demo-mobile" src={ImgSrcArr[ImgIndex]} alt="appdemo-1" />
                    </div>

                    <div id="demo-steps-parent-div" className="col">
                        <div id="demo-step-1" ref={step1TextRef} className="demo-steps-div">
                            <h4 className="demo-heading">1. Tell us where you want to go</h4>
                            <p className="demo-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>

                        <div id="demo-step-2" ref={step2TextRef} className="demo-steps-div">
                            <h4 className="demo-heading">2. Select your time and route</h4>
                            <p className="demo-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>

                        <div id="demo-step-3" ref={step3TextRef} className="demo-steps-div">
                            <h4 className="demo-heading">3. Book your ride</h4>
                            <p className="demo-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default AppWorking
