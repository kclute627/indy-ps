import React, { Component } from "react";
import map from '../Assets/map.png'

import { GoogleApi } from "../keys";

import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {

   
  render() {

    return (
        <div className="pricing__map">
           <img src={map} alt="service area" className="pricing__map-photo"/>
        </div>
       
           
      
      
      
    );
  }
}

export default MapContainer;
