import React from "react";
import './Navbar.css';

// Assets
import trustpilot from '../../assets/trustpilot.png'
import bbb from '../../assets/bbb.png'

const Navbar = () => {
    return (
        <div className="container-fluid navbar-container">
            {/* We use cookies section */}
            <div className="row cookies-alert-bar justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 col">
                    <p>We use cookies and network activity information to ensure the functionality of our website, to help us find ways to improve it and to make it more positive and relevant user experience. Please see our Privacy Policy for more details.</p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 col">
                    <button>OK, GOT IT</button>
                </div>
            </div>

            {/* Navigation */}
            <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12"></div>
            </div>

            {/* Trustpilot, Top rated flight search site */}
            <div className="row trustpilot-row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12 col">
                    <div>
                        <img src={trustpilot} alt=""/>
                        &nbsp;&nbsp;
                        <p>Top Rated Flights Search Site</p>
                    </div>
                    <div>
                        <img src={bbb} alt=""/>
                        <p>Accredited Business</p>
                    </div>
                    <div>
                        <p>Recommended by 97% customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;