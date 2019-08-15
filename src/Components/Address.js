import React, { Component, Fragment } from "react";
import ReactSvg from "react-svg";
import compass from "../Assets/svg/compass.svg";
import email from "../Assets/svg/envelope.svg";
import phone from "../Assets/svg/phone.svg";

class Address extends Component {
  
 
    
  render() {
 const{container, header, contactInfo} = this.props;
    
    return (
      <div className={container}>
        <h1 className={header}>Address</h1>
        <div className={contactInfo}>
          <ReactSvg src={compass} />
          <p> 101 N. Main Street Indianapolis, In 40983 </p>
        </div>
        <div className={contactInfo}>
          <ReactSvg src={phone} />
          <p> 1-800-898-9088 </p>
        </div>
        <div className={contactInfo}>
          <ReactSvg src={email} />
          <p> info@ccprocess.com </p>
        </div>
      </div>
    );
  }
}
export default Address;