import React from 'react'
import ContactImg from '../images/contact-illustration.png';

const ContactUs = () => {
    return (
        <div id="Contact" className="container gutter">
            <br /> <br /> <br /> <br />
            <div className="row">
                <div className="col contact-img justify-content-center align-items-center">
                    <img src={ContactImg} className="contact-image" />
                </div>
                <div className="col">
                    <p className="contact-heading">Need to know more?</p>
                    <p className="contact-heading">Contact Us!</p>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="col-sm-12 form-group">
                            <input
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                type="email"
                                required
                            />
                        </div>
                    </div>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                    />
                    <br />
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <button className="btn contact-btn btn-lg btn-block" type="submit">
                                Send Message
                  </button>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br /> <br />
        </div>

    )
}

export default ContactUs
