import React, { useState } from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

// Assets
import trustpilot from '../../assets/trustpilot.png'
const Navbar = () => {
    function closePromoBanner(){
        document.getElementById('promobanner').remove();
    }
    const [isExpand,setIsExpand] = useState(false);
    const [isExpandHeader,setIsExpandHeader] = useState(false);
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
    function extendheader(){
        const elem = document.getElementById('section-for-search');
        if(isExpandHeader){
            elem.classList.remove('show-section-for-search');
        }else{
            elem.classList.add('show-section-for-search');
        }
        setIsExpandHeader(!isExpandHeader)
    }
    function changeRadio(e,name , id){
        const elems = document.querySelectorAll('input[name='+name+']');
        for (const radioButton of elems) {
            if (radioButton.id === id) {
                radioButton.checked = true;
            }
        }
        e.target.classList.add('checked')

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
            <div className="row justify-content-center">
                <div className="col-xl-9 col-lg-10 col-md-11 col-sm-12 col-12 header-bar">
                    <div className="row justify-content-center header-container">
                        <div className="col-2">
                            <NavLink to='/'>
                            <img src="https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2F20plusAniversaryLogo.svg&w=256&q=75" alt="" />
                            </NavLink>
                        </div>
                        <div className="col-6 container-fluid">
                            <div className="row header-row">
                                <div className="col">
                                    <div className="header-column-indi">
                                    <span>Flights</span>
                                    <svg class="" style={{"fontSize":"8px"}} width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                    </div>
                                    <div className="submenu-of-header">
                                        <div style={{"display": 'grid','gridAutoFlow': 'row','gridGap':'15px'}}>
                                            <div className="row-header-submenu">
                                                <div className="col-title-submenu">Top Deals</div>
                                                <div className="col-title-submenu ps-5">Premium Cabin Flights</div>
                                            </div>
                                            <div className="row-header-submenu">
                                                <div className="px-3">
                                                <a href="#">Top Airline Deals</a>
                                                <a href="#">Cheap Flight Tickets</a>
                                                <a href="#">Group Travel</a>
                                                <a href="#">Multi City Flights</a>
                                                <a href="#">One-Way Flights</a>
                                                <a href="#">Non-Stop Flights</a>
                                                <a href="#" style={{'textDecoration': 'underline' , 'color': '#0d6efd'}} className='pb-2'>See all</a>
                                                </div>
                                                <div className="px-4">
                                                <a href="#">Premium Economy Flights</a>
                                                <a href="#">Buisness Class Flights</a>
                                                <a href="#">First Class Flights</a>
                                                <a href="#">Buisness Airlines Deals</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="header-column-indi">
                                    <span>Offers</span>
                                    <svg class="" style={{"fontSize":"8px"}} width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                    </div>
                                    <div className="submenu-of-header">
                                        <div style={{"display": 'grid','gridAutoFlow': 'row','gridGap':'15px'}}>
                                            <div className="row-header-submenu">
                                                <div className="col-title-submenu">Flights From US</div>
                                                <div className="col-title-submenu">Flights To US</div>
                                            </div>
                                            <div className="row-header-submenu">
                                                <div className="px-3">
                                                <a href="#">To Asia</a>
                                                <a href="#">To Africa</a>
                                                <a href="#">To Europe</a>
                                                <a href="#">To Middle East</a>
                                                <a href="#">To India & ISC</a>
                                                <a href="#">To Oceania</a>
                                                <a href="#">To Latin America</a>
                                                <a href="#" style={{'textDecoration': 'underline' , 'color': '#0d6efd'}} className='pb-2'>See all</a>

                                                </div>
                                                <div className="px-3">
                                                <a href="#">From Asia</a>
                                                <a href="#">From Africa</a>
                                                <a href="#">From Europe</a>
                                                <a href="#">From Middle East</a>
                                                <a href="#">From India & ISC</a>
                                                <a href="#">From Oceania</a>
                                                <a href="#">From Latin America</a>
                                                <a href="#" style={{'textDecoration': 'underline' , 'color': '#0d6efd'}} className='pb-2'>See all</a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="header-column-indi">
                                    <span>Hotels</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="header-column-indi">
                                    <span>Extras</span>
                                    <svg class="" style={{"fontSize":"8px"}} width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                    </div>
                                    <div className="submenu-of-header">
                                        <div style={{"display": 'grid','gridAutoFlow': 'row','gridGap':'15px'}}>
                                            <div className="row-header-submenu">
                                                <div className="col-title-submenu">Travel Extras</div>
                                            </div>
                                            <div className="row-header-submenu">
                                                <div className="px-3">
                                                <a href="#">Vacations</a>
                                                <a href="#">Attractions</a>
                                                <a href="#">Concierge</a>
                                                <a href="#" style={{'textDecoration': 'underline' , 'color': '#0d6efd'}} className='pb-2'>See all</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="header-column-indi">
                                    <span>Support</span>
                                    <svg class="" style={{"fontSize":"8px"}} width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                    </div>
                                    <div className="submenu-of-header">
                                        <div style={{"display": 'grid','gridAutoFlow': 'row','gridGap':'15px'}}>
                                            <div className="row-header-submenu">
                                                <div className="px-3">
                                                <a href="#">Customer Service</a>
                                                <a href="#">My Booking</a>
                                                <a href="#">FAQ</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="header-column-indi">
                                    <span>About</span>
                                    <svg class="" style={{"fontSize":"8px"}} width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                    </div>
                                    <div className="submenu-of-header">
                                        <div style={{"display": 'grid','gridAutoFlow': 'row','gridGap':'15px'}}>
                                            <div className="row-header-submenu">
                                                <div className="px-3">
                                                    <NavLink to="/about">About Us</NavLink>
                                                    <a href="#">Reviews</a>
                                                    <a href="#">Video</a>
                                                    <a href="#">Customer Stories</a>
                                                    <NavLink to="/contact-us">Contact Us</NavLink>
                                                    <a href="#">Blog</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row info-header header-row">
                                <div className="main-tollfree">
                                <div className="phoneno-tollfree">
                                    <div>
                                        <div className="col align-items-center" style={{'display': 'grid','height': '100%' , 'justifyItems': 'end'}}>
                                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="transparent" stroke-linecap="round" stroke-miterlimit="50"><path d="M13.65 27.694a.5.5 0 000 1h4a.5.5 0 100-1h-4z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.702 2H10.205a2.59 2.59 0 00-2.553 2.621v23.602a2.59 2.59 0 002.553 2.621h11.496a2.59 2.59 0 002.553-2.621V5.06h-.003v-.438A2.59 2.59 0 0021.701 2zM8.952 6.36h14v.225h.002v18.878H8.952V6.36zm0-1.3h14v-.451A1.291 1.291 0 0021.685 3.3H10.22A1.291 1.291 0 008.95 4.608v.452zm0 23.176v-1.473h14.002V28.236a1.291 1.291 0 01-1.268 1.308H10.22a1.291 1.291 0 01-1.268-1.308z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.926 11.914a.65.65 0 010 .92 4.597 4.597 0 000 6.5.65.65 0 11-.92.92 5.897 5.897 0 010-8.34.65.65 0 01.92 0z" fill="#1CB948"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.415 10.06a.65.65 0 010 .92 7.219 7.219 0 000 10.21.65.65 0 01-.919.92 8.52 8.52 0 010-12.05.65.65 0 01.92 0zM25.543 11.914a.65.65 0 01.92 0 5.897 5.897 0 010 8.34.65.65 0 11-.92-.92 4.597 4.597 0 000-6.5.65.65 0 010-.92z" fill="#1CB948"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.053 10.06a.65.65 0 01.92 0 8.52 8.52 0 010 12.05.65.65 0 01-.92-.92 7.219 7.219 0 000-10.21.65.65 0 010-.92z" fill="#1CB948"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col border-start border-end border-2 h-50 align-self-center">
                                <div className="header-column-indi justify-content-center">
                                    <div className="flag-us-block"></div>
                                    <span><strong>ENG</strong></span>
                                </div>
                                <div className="submenu-of-header submenu-of-header-flags">
                                        <div style={{"display": 'grid','gridAutoFlow': 'row','gridGap':'15px'}}>
                                            <div className="row-header-submenu p-2">
                                                <div className="px-3">
                                                <a href="#">
                                                <div className="flag-us-block d-inline-block"></div>
                                                <span>United States- English</span>
                                                </a>
                                                <a href="#">
                                                <div className="flag-us-block d-inline-block"></div>
                                                <span>United States- Espanol</span>
                                                </a>
                                                <a href="#">
                                                <div className="flag-canada-block d-inline-block"></div>
                                                <span>Canada- English</span>
                                                </a>
                                                <a href="#">
                                                <div className="flag-uk-block d-inline-block"></div>
                                                <span>United Kingdom- English</span>
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={extendheader} style={{'cursor': 'pointer'}} className="col fs-5 align-items-center">
                                    {isExpandHeader? <svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" data-qa-search="opened"><path d="M20 1.15L18.84 0 10 8.83 1.16 0 0 1.15 l8.84 8.84-8.84 8.84 1.16 1.16 8.84-8.84 8.84 8.84 1.16-1.16-8.84-8.84z"></path></svg> :<svg width="1em" height="1em" viewBox="0 0 19 19" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-width="2" stroke-miterlimit="50" data-qa-search="closed"><path d="M1.797 8.658a6.658 6.658 0 1 1 13.315 0 6.658 6.658 0 0 1-13.315 0z"></path><path d="M12.782 13.65l3.995 3.995"></path></svg>}
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-for-search" className="col-xl-9 col-lg-10 col-md-11 col-sm-12 col-12 section-for-search">
                    <div className="p-3 h-100">
                        <div className="row">
                            <div className="col search-form-div" id="round" onClick={(e) => {changeRadio(e,'trip','round')}}>
                                <span>
                                    <input type="radio" className="radio-search" name="trip" id="round" />
                                    Round-Trip
                                </span>
                            </div>
                            <div className="col search-form-div" id="one" onClick={(e) => {changeRadio(e,'trip','one')}}>
                                <span>
                                    <input type="radio" className="radio-search" name="trip" id="one" />
                                    One-Way
                                </span>
                            </div>
                            <div className="col-2" style={{'fontSize': '14px'}}>
                                <a href="#" style={{'textDecoration': 'underline','color': 'rgb(59, 53, 54)'}}>Multi-City Flights</a>
                            </div>
                            <div className="col-7"></div>
                        </div>
                        <div className="row" style={{'display': 'grid' , 'gridTemplateColumns': '2fr 2fr 2fr 2fr 1.5fr 1fr'}}>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trustpilot, Top rated flight search site */}
            <div className="row trustpilot-row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12 col">
                    <div>
                        <img src={trustpilot} alt=""/>
                        &nbsp;&nbsp;
                        <p>Top Rated Flights Search Site</p>
                    </div>
                    <div className="acc-business">
                        <a href="https://www.bbb.org/us/ca/san-francisco/profile/travel-agency/international-travel-network-llc-1116-72752">
                        <img src="https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2FBBB_Header_A_plus.svg&w=96&q=75"/>
                        </a>
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