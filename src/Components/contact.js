import React, { Component } from "react";
import ReactSvg from "react-svg";
import compass from "../Assets/svg/compass.svg";
import email from "../Assets/svg/envelope.svg";
import phone from "../Assets/svg/phone.svg";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = () => {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="contact-container" id="contactus">
        <div className="contact-box">
          <div className="contact-box-header">
            <h3 className="contact-box-header-header">Contact Us</h3>
            <div className="contact-border" />
            <p className="contact-box-header-text">
              Have an assignment or a rush process service job? Reach us via any
              of the ways below. If the matter is urgent please call the number
              listed below.
            </p>
          </div>

          <div className="contact-box-text">
            <h1 className="contact-box-form-header">Address</h1>
            <div className="contact-info">
              <ReactSvg src={compass} />
              <p> 101 N. Main Street Indianapolis, In 40983 </p>
            </div>
            <div className="contact-info">
              <ReactSvg src={phone} />
              <p> 1-800-898-9088 </p>
            </div>
            <div className="contact-info">
              <ReactSvg src={email} />
              <p> info@ccprocess.com </p>
            </div>
          </div>
          <div className="contact-box-form">
            <h1 className="contact-box-form-header">Send Us A Message</h1>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.changeHandler}
              value={this.state.name}
              className="contact-box-form-form"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.changeHandler}
              className="contact-box-form-form"
            />
            <textarea
              onChange={this.changeHandler}
              value={this.state.message}              
              name="message"
              placeholder="send us a message"
              
              className="contact-box-form-text"
            />
            <button className="contact-box-button" onClick={this.submitHandler}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
