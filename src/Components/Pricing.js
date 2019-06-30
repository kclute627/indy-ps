import React, { Component } from "react";
import MapContainer from'./map';

class Pricing extends Component {
  render() {
    return (
      <div className="pricing__container">
        <div className="pricing__header">
          <h1 className="pricing__header-text">Pricing</h1>
          <div className="pricing__header-border" />
        </div>
        <MapContainer />

      </div>
    );
  }
}

export default Pricing;
