import React, { Component } from "react";
import naaps from "../Assets/naaps.png";
import iapa from "../Assets/iapa.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__contact">
          <div className="footer__contact-info">
            <ul className="footer__contact-list">
              <li className="footer__contact-list-1">Contact Info</li>
              <li className="footer__contact-list-2">101 N. Main Street </li>
              <li className="footer__contact-list-2">Indianapolis, In 40983</li>
              <li className="footer__contact-list-2">1-800-898-9088</li>
              <li className="footer__contact-list-2"><a href="mailto:info@ccprocess.com">info@ccprocess.com</a></li>
            </ul>
            <div className="footer__contact-box">
              <h1 className="footer__contact-header">Proud Members of:</h1>
              <img  className="footer__contact-img" src={naaps} alt="naaps" />
              <img className="footer__contact-img" src={iapa} alt="iapa" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
