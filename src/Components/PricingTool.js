import React, { Component } from "react";
import ReactSvg from "react-svg";
import search from "../Assets/svg/magnifying-glass.svg";
import { zipCodes } from "./zipCodes";

class PricingTool extends Component {
  state = {
    zipCode: "",
    finalZip: "",
    routine: "",
    rush: "",
    sameDay: "",
    city: "",
    match: false
  };

  handleKeypress = e => {
    const { zipCode } = this.state;
    if (e.which === 13 && zipCode.length === 5) {
      console.log("enterrerre");
      this.zipcodeHandler();
    }
  };

  zipcodeHandler = () => {
    const { zipCode } = this.state;
    this.setState({
      finalZip: zipCode,
      match: true
    });
  };

  changeHandler = e => {
    e.preventDefault();

    if (e.target.value.length <= 5 && !isNaN(e.target.value)) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {
    const { finalZip, zipCode, match } = this.state;
    let searchResult;

    if (finalZip) {
      searchResult = zipCodes.filter(cur => {
        if (cur.zip == finalZip) {
          return cur;
        } else if (cur.zip == finalZip) {
          return null;
        }
      });
    }

    console.log(searchResult);

    return (
      <div className="pricing__tool">
        <h3 className="pricing__tool-header">Price Quote</h3>
        <p className="pricing__tool-header-text">
          Do you need an Indiana Process Server? Enter the zip code of where
          your legal document are going below to get a price quote.
        </p>
        <div className="pricing__tool-input-box">
          <input
            type="text"
            className="pricing__tool-input"
            placeholder="Enter a ZipCode"
            value={this.state.zipCode}
            name="zipCode"
            onChange={this.changeHandler}
            onKeyPress={this.handleKeypress}
          />
          <ReactSvg
            src={search}
            className="pricing__tool-icon"
            onClick={this.zipcodeHandler}
          />
        </div>
        <div className="pricing__results">
          {searchResult && searchResult.length === 1 ? (
            <div className="pricing__searchResult">
              <h1 className="pricing__searchResult-1">
                We do serve in {searchResult[0].city}, Indiana
              </h1>
              <div className="pricing__searchResult-2">Same-Day</div>
              <div className="pricing__searchResult-3">
                {searchResult[0].fees.sameDay}
              </div>
              <div className="pricing__searchResult-4">Rush</div>
              <div className="pricing__searchResult-5">
                {searchResult[0].fees.rush}
              </div>
              <div className="pricing__searchResult-6">Routine</div>
              <div className="pricing__searchResult-7">
                {searchResult[0].fees.routine}
              </div>
              <div className="pricing__searchResult-8">
                Please call us or email info@ccprocess.com to order
              </div>
            </div>
          ) : finalZip && searchResult.length == 0 ? (
            <div className="pricing__searchResult">
              <h1 className="pricing__searchResult-9">
                Sorry we do not serve in that area
              </h1>
              <div className="pricing__searchResult-8">
                Please call us or email info@ccprocess.com for a referral 
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default PricingTool;
