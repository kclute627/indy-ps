import React, { Component } from 'react';
import ReactSvg from 'react-svg'

import auction from '../Assets/svg/auction.svg';
import balance from '../Assets/svg/balance.svg';
import paper from '../Assets/svg/paper.svg';

class Services extends Component {



    render(){

        return(
            <div className="services-container" id="services">
                <div className="services-header">
                    <h1 className="services-header-header">More than Process servers</h1>
                    <p className="services-header-text">Here at Circle City Process service we offer a wide variety of legal services.  Our dedicated staff has over 100 years combined legal experience to help you with whatever need you may have. From locating a witness to tracking down year’s old documents at the courthouse we are here to help.</p>
                </div>
                
                <div className="services-info">
                    <div className="services-info-box">
                        <ReactSvg src ={paper} className='icon'/>
                        <h3 className="services-info-box-header">Process Service</h3>
                        <p className="services-info-box-text">
                        We have served thousands of court document’s over the past 20 years. Our skilled and dedicated process servers work the entire state of Indiana and there is no assignment to large or small for our staff.
                        </p>
                    </div>
                    <div className="services-info-box">
                        <ReactSvg src ={balance} className='icon'/>
                        <h3 className="services-info-box-header">Document Retrieval</h3>
                        <p className="services-info-box-text">
                        Our staff and process servers navigate the Indiana Courthouses on a daily basis. We  have the contacts and know the nuances of each courthouse to get you your documents in a timely manner. If you have a document retrieval assignment shoot us an email. 
                        </p>
                    </div>
                    <div className="services-info-box">
                        <ReactSvg src ={auction} className='icon'/>
                        <h3 className="services-info-box-header">E-Filing</h3>
                        <p className="services-info-box-text">We are here to help you navigate the courts ever more dependence on technology. We offer full-service e-filing from opening of a case to filing pleadings in an already open case. We are here to help give us a call to learn more about our e-filing services. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;