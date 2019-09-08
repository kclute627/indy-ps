import React, { Component } from "react";
import Address from "./Address";
import { delay } from "q";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    messageSent: false,
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() =>
        this.setState({
          name: "",
          email: "",
          message: "",
          messageSent: true
        })
      ).then(setTimeout(()=> this.setState({messageSent: false}), 5000))
      .catch(error => alert(error));

    e.preventDefault();
  };

  

  

  render() {
   

    const { messageSent } = this.state;

  
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

          <Address
            container="contact-box-text"
            header="contact-box-form-header"
            contactInfo="contact-info"
          />

          <form name="contact" className="contact-box-form">
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
            {messageSent ? (
              <div className="message-sent">Message Sent!!</div>
            ) : null}

            <button
              className="contact-box-button"
              type="submit"
              onClick={this.submitHandler}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
