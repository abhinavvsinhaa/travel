import React, { useState } from "react";
import './Navbar.css';

// Assets
import trustpilot from '../../assets/trustpilot.png'
import bbb from '../../assets/bbb.png'

const Navbar = () => {
    function closePromoBanner(){
        document.getElementById('promobanner').remove();
    }
    const [isExpand,setIsExpand] = useState(false);
    function togglePromBanner(){
        const elements = document.getElementsByClassName('promobanner-hidden-text');
        for(var i=0; i <elements.length ; i++){
            if(isExpand){
                elements[i].classList.remove('show-text')
            }else{
                elements[i].classList.add('show-text')
            }
        }
        setIsExpand(!isExpand)
    }
    return (
        <div className="container-fluid navbar-container">
            {/* We use cookies section */}
            <div id="promobanner" className="row promobanner-bar justify-content-center">
                <div className="col-xl-9 col-lg-10 col-md-11 col-sm-12 col-12 container-fluid">
                    <div className="row">
                    <div className="col-{96%} container-fluid promobanner-content">
                        <div className="row" onClick={togglePromBanner}>
                            <div className=" col container-fluid">
                                <div className="row">
                                <span class="flex"><svg width="1em" height="1em" fill="#ffda3e" viewBox="0 0 16.176 17.739" class="svgIcon" textfill="#0a317c"><path d="M.403 8.357H6.36a.4.4 0 00.285-.688l-1.2-1.2c4.015-4.992 10.727-.131 10.727-.131-5.158-11.353-13.428-4-13.428-4a4.272 4.272 0 00-.738.693L.684 1.709a.4.4 0 00-.688.285v5.957a.4.4 0 00.407.406z"></path><path d="M15.773 9.381H9.816a.4.4 0 00-.285.688l1.2 1.2C6.716 16.261.004 11.4.004 11.4c5.158 11.353 13.428 4 13.428 4a4.276 4.276 0 00.738-.693l1.322 1.322a.4.4 0 00.688-.285V9.787a.4.4 0 00-.407-.406z"></path></svg><span class="px-2">Free Exchange</span></span>
                                </div>
                                <div className="row promobanner-hidden-text">
                                    <div className = "py-3">
                                    Feel worried about booking tickets now? Buy with more confidence: Free ticket exchange is available with our partner airlines.
                                    </div>
                                </div>
                            </div>
                            <div className=" col container-fluid">
                                <div className="row">
                                <span class="flex"><svg class="svgIcon" width="1em" height="1em" fill="#ffda3e" viewBox="0 0 19.924 22.568" textfill="#0a317c"><g><path d="M17.204 22.567H2.72A2.719 2.719 0 010 19.847v-8.929a2.719 2.719 0 012.72-2.72h14.485a2.719 2.719 0 012.72 2.72v8.929a2.719 2.719 0 01-2.721 2.72z"></path><g><path d="M2.629 9.601c-.024-.189-.561-4.652 1.9-7.448a7.462 7.462 0 0110.488 0c2.463 2.8 1.928 7.259 1.9 7.448l-2.469-.314 1.235.157-1.235-.154c0-.035.412-3.554-1.308-5.5a5.011 5.011 0 00-6.741 0c-1.72 1.944-1.31 5.462-1.306 5.5z"></path></g><text transform="translate(6.71 18.01)" fill="#0a317c" font-size="9" font-weight="700"><tspan x="0" y="0">$</tspan></text></g></svg><span class="px-2">Fare Lock</span></span>
                                </div>
                                <div className="row promobanner-hidden-text">
                                   <div className = "py-3">
                                   Need more time to decide? We can lock your fare from 24 to 48 hours to hold your seat.
                                   </div>
                                </div>
                            </div>
                            <div className=" col container-fluid">
                                <div className="row">
                                <span class="flex"><svg class="svgIcon" width="1em" height="1em" fill="#ffda3e" viewBox="0 0 25 22.326" textfill="#0a317c"><text transform="translate(8 14.918)" font-size="11" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="0">$</tspan></text><path d="M11.163 22.327a11.163 11.163 0 1111.163-11.163 11.176 11.176 0 01-11.163 11.163zm0-19.946a8.783 8.783 0 108.783 8.783 8.793 8.793 0 00-8.783-8.784z"></path><path d="M18.138 11.555V8.509a.973.973 0 01.973-.973h3.66a.973.973 0 01.973.973v3.046h.655a.972.972 0 01.865.518.943.943 0 01-.145 1.083l-3.458 3.742a.985.985 0 01-1.44 0l-3.458-3.742a.944.944 0 01-.145-1.083.972.972 0 01.865-.518z" fill="#0a317c" fill-rule="evenodd"></path><path d="M20.822 16.342L17.364 12.6a.125.125 0 01-.021-.147.154.154 0 01.14-.08h1.474V8.508a.155.155 0 01.154-.155h3.66a.155.155 0 01.155.155v3.865H24.4a.153.153 0 01.14.08.125.125 0 01-.021.147l-3.458 3.742a.166.166 0 01-.238 0" fill-rule="evenodd"></path><path d="M16.999 5.936l5.136-1.863.666 3.237-4.045.665z" fill="#0a317c"></path><path d="M20.838 19.622l-4.911-2.4 1.863-2.73 3.291 2.445z" fill="#0a317c"></path></svg><span class="px-2">Price Drop Guarantee</span></span>
                                </div>
                                <div className="row promobanner-hidden-text">
                                    <div className = "py-3">
                                    Not sure if you are getting the best deal? We will monitor the price and in case of a price drop, you will get the price difference.
                                    </div>
                                </div>
                            </div>
                            <div className=" col container-fluid">
                                <div className="row">
                                <span class="flex"><svg class="svgIcon" width="1em" height="1em" viewBox="0 0 21.415 21.029" fill="#ffda3e" textfill="#0a317c"><path d="M11.146 4.169h4.888l-.686-1.7zm4.677-2.815l1.137 2.818h.535a3.762 3.762 0 01.977.133l-1.4-3.456a1.352 1.352 0 00-1.76-.748L5.236 4.172h3.617zm-3.5 11.74a3.3 3.3 0 013.3-3.3H20.3v-1.84a2.8 2.8 0 00-2.8-2.8H2.8a2.8 2.8 0 00-2.8 2.8v10.283a2.8 2.8 0 002.8 2.8h14.7a2.8 2.8 0 002.8-2.8v-1.846h-4.677a3.3 3.3 0 01-3.302-3.3zm8.409-2.313h-5.113a2.312 2.312 0 100 4.624h5.113a.684.684 0 00.685-.684v-3.255a.684.684 0 00-.687-.687zm-5.113 3.308a.995.995 0 11.995-1 1 1 0 01-.998.997z"></path></svg><span class="px-2">Book Now - Pay Later!</span></span>
                                </div>
                                <div className="row promobanner-hidden-text">
                                    <div className = "py-3">
                                    Not ready to pay the full ticket amount now? We also offer bookings with 3, 6 or 12 monthly instalments.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col close-promobanner" onClick={closePromoBanner}>
                    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor"><path d="M20 1.15L18.84 0 10 8.83 1.16 0 0 1.15 l8.84 8.84-8.84 8.84 1.16 1.16 8.84-8.84 8.84 8.84 1.16-1.16-8.84-8.84z"></path></svg>
                    </div>
                    </div>
                </div>
            </div>
            <div id="cookies-alert-bar" className="row cookies-alert-bar justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 col">
                    <p>We use cookies and network activity information to ensure the functionality of our website, to help us find ways to improve it and to make it more positive and relevant user experience. Please see our Privacy Policy for more details.</p>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 col">
                    <button onClick={() => {document.getElementById('cookies-alert-bar').remove()}}>OK, GOT IT</button>
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
                    <span class="f-size-18 m-r-sm v-middle"><svg width="1.17em" height="1em" viewBox="0 0 21 18" fill="currentColor"><path d="M18.152 9.676l-6.98 6.98a1.042 1.042 0 0 1-1.472 0L2.674 9.63 a4.55 4.55 0 0 1-1.341-3.24 4.55 4.55 0 0 1 1.341-3.238 4.55 4.55 0 0 1 3.24-1.342 4.55 4.55 0 0 1 3.238 1.342l.549.549-.84.841a.52.52 0 0 0 .735.736l2.124-2.126a4.55 4.55 0 0 1 3.24-1.342c1.242 0 2.405.49 3.275 1.38 1.746 1.785 1.708 4.694-.083 6.486zm.827-7.214A5.58 5.58 0 0 0 14.96.77a5.585 5.585 0 0 0-3.975 1.646l-.548.549-.548-.549 A5.584 5.584 0 0 0 5.913.77a5.585 5.585 0 0 0-3.975 1.646A5.584 5.584 0 0 0 .292 6.391c0 1.501.585 2.913 1.646 3.975l7.026 7.025 c.406.406.939.609 1.472.609s1.066-.203 1.472-.609l6.98-6.98 c2.192-2.192 2.233-5.758.091-7.949z"></path><path d="M18.75 6.155a3.8 3.8 0 0 0-2.768-3.425.52.52 0 1 0-.279 1.002 2.756 2.756 0 0 1 2.008 2.487.52.52 0 0 0 1.04-.064z"></path></svg></span>
                        <p>Recommended by 97% customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;