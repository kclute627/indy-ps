import React, { Component } from 'react';




class Nav extends Component {

    render(){
        const {nav}= this.props;

        const navBar = (
            <ul className="nav-ul">
                {nav.map((cur, i) => (
                    <li
                    key={i}
                    className={i%2 === 0 ? 'nav-item blue' : "nav-item red"}>{cur}</li>
                ))}
            </ul>
        )

        return(
            <div className="nav">
                {navBar}
            </div>
        )
    }
}



export default Nav;