import React, {Component} from 'react';
import Nav from './nav';
import logo from '../Assets/logo-white.png'



class HomePage extends Component {

    state = {
        nav: ["Services", "Contact Us", "Pricing","About Us" ],
    }


    render(){

        const {nav} = this.state;

        return(
            <div className="homepage-container">
                <div className="homepage-logo">
                    <img src={logo} alt="logo white" className="homepage-logo-pic"/>
                </div>
                <Nav 
                nav = {nav} />
                <div className="homepage-main">
                    <h1 className="homepage-main-text">Indiana’s Top Process Server </h1>
                    <h2 className="homepage-main-text-1">for the Past 20 Years </h2>
                </div>



            </div>
        )
    }
}


export default HomePage;