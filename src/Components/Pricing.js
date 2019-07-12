import React, { Component } from "react";
import MapContainer from "./map";
import PricingTool from "./PricingTool";

class Pricing extends Component {
  render() {
    return (
      <div className="pricing__container" id="pricing">
        <div className="pricing__header">
          <h1 className="pricing__header-text">Pricing</h1>
          <div className="pricing__header-border" />
        </div>
        <MapContainer />
        <div className="pricing__info">
          <div className="pricing__info-1" />
          <div className="pricing__info-1-text">
            <div className="pricing__info-text">Same-Day: $185.00</div>
            <div className="pricing__info-text">Rush: $125.00</div>
            <div className="pricing__info-text">Routine: $85.00</div>
          </div>
          <div className="pricing__info-2" />
          <div className="pricing__info-2-text">
            <div className="pricing__info-text">Same-Day: $145.00</div>
            <div className="pricing__info-text">Rush: $100.00</div>
            <div className="pricing__info-text">Routine: $75.00</div>
          </div>
          <div className="pricing__info-3" />
          <div className="pricing__info-3-text">
            <div className="pricing__info-text">Same-Day: $125.00</div>
            <div className="pricing__info-text">Rush: $85.00</div>
            <div className="pricing__info-text">Routine: $65.00</div>
          </div>
          <div className="pricing__def">
            <div className="pricing__def-box">
              <div className="pricing__def-text">
                <span className="blue-1">Same-Day:</span>{" "}
                <span>
                  Attempts are made the same day the documents are received
                </span>{" "}
                <span className="red-1">Rush:</span><span>Attempts are made no less
                than 48 hours of receiving the documents</span> {" "}
                <span className="blue-1">Routine:</span><span>Attempts are made 3-4
                days of receiving the documents</span> {" "}
              </div>
            </div>
          </div>
          <PricingTool />
        </div>
      </div>
    );
  }
}

export default Pricing;
