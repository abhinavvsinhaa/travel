import './About.css'
export default function About(){
    document.title = 'About Asaptickets.com: ASAP Tickets® Official Website | Asaptickets.com'
    return(
        <>
        <div className="container-fluid aboutus-outer-container">
            <div className="aboutus-inner-container">
                <div className="mb-3 text-white">
                <h1 class="font-weight-bold text-white mb-3 what-is-asap">What is ASAP Tickets?</h1>
                <div className="asap-intro">
                ASAP Tickets is a legit travel agency that provides cheap airline tickets worldwide. We specialize in providing the best flight deals that are not available online, complete with personalized 24/7 customer support. Personal Travel Managers will help you find and book airline tickets according to your budget and  flight preferences.
                </div>
                </div>
                <div className="aboutus-wrapperstyle">
                    <div className="mb-3 aboutus-video-wrapper">
                        <img alt="About us video" title="About us video" src="https://www.asaptickets.com/static/img/about/video-img.jpg"/>
                        <svg width="1em" height="1em" viewBox="14 4 53 53" fill="currentColor" class="align-v-center"><path d="M46.637 33.275l-6.386 5.14c-1.907 1.535-3.468.787-3.468-1.66v-12.54 c0-2.448 1.561-3.195 3.468-1.66l6.386 5.14c1.906 1.534 1.906 4.045 0 5.58zm-6.221-28.36c-14.122 0-25.57 11.447-25.57 25.57 0 14.122 11.448 25.57 25.57 25.57s25.57-11.448 25.57-25.57c0-14.123-11.448-25.57-25.57-25.57z"></path></svg>
                    </div>
                </div>
                <div className='aboutus-badges'>
                    <div>
                    <div className='aboutus-operating'></div>
                        <div className='badges-text-block'>
                        Operating &ensp;
                        <strong>Since 2001</strong>
                        </div>
                    </div>
                    <div>
                    <div className='aboutus-star'></div>
                        <div className='badges-text-block'>
                        <strong>Top Rated Airline Ticket &ensp;</strong>
                        Agency
                        </div>
                    </div>
                    <div>
                    <div className='aboutus-discount'></div>
                        <div className='badges-text-block'>
                        <strong>You Save $287+</strong>
                        on&ensp;Average per Ticket
                        </div>
                    </div>
                    <div>
                    <div className='aboutus-lang'></div>
                        <div className='badges-text-block'>
                        We Speak&ensp;
                        <strong>Your Language</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center simpleandfast'>
            <div className='simpleandfast-container'>
                <div class="furhi f-size-12-14 ">How ASAP Tickets Works?</div>
                <h1 class="simpleandfasttitle">Simple and Fast</h1>
                <div className='simpleandfast-flex f-size-12-14'>
                    <div className='simpleandfast-flex-content'>
                        <div className='simpleandfast-icon how-main-0'>
                            <div className='sf-icon-main how-0'>

                            </div>
                        </div>
                        <div className="font-weight-bold mb-3">Call for Cheap Flights</div>
                        <div>ASAP Tickets has unique contracts with Airlines and access to unpublished fares unavailable online. Uncover the best deals to top destinations around the world by calling your Travel Agent.</div>
                    </div>
                    <div className='simpleandfast-flex-content'>
                        <div className='simpleandfast-icon how-main-1'>
                            <div className='sf-icon-main how-1'>

                            </div>
                        </div>
                        <div className="font-weight-bold mb-3">Get FREE Quotes</div>
                        <div>Free trip planning and personalized itineraries available 24/7. Discuss travel plans with your personal travel agent and get as many details as you need.</div>
                    </div>
                    <div className='simpleandfast-flex-content'>
                        <div className='simpleandfast-icon how-main-2'>
                            <div className='sf-icon-main how-2'>

                            </div>
                        </div>
                        <div className="font-weight-bold mb-3">Pay Securely</div>
                        <div>Confirm your travel and book securely online. ASAP Tickets offer a variety of payment solutions, and we want you to feel confident by protecting your data and sensitive details.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='asap-tickets'>
            <h1>ASAP Tickets Services</h1>
            <div className='asap-tickets-container'>
                <div>
                    <div className='flight-booking'></div>
                    <div className='f-size-12-14'>
                        <div className='asap-tickets-container-title-ind'>Flight Booking</div>
                        <div class="mb-2">Get great deals on cheap flights at discount airfares with ASAP Tickets</div>
                        <a href="#" target="_blank" rel="noopener noreferrer">Book a Flight</a>
                    </div>
                </div>
                <div>
                    <div className='hotel-booking'></div>
                    <div className='f-size-12-14'>
                        <div className='asap-tickets-container-title-ind'>Hotel Booking</div>
                        <div class="mb-2">Find special deals on hotels, homes, and much more with ASAP Tickets</div>
                        <a href=" /special-offers" target="_blank" rel="noopener noreferrer">Book a Hotel</a>
                    </div>
                </div>
                <div>
                    <div className='vacation-booking'></div>
                    <div className='f-size-12-14'>
                        <div className='asap-tickets-container-title-ind'>Vacations<br/>(Flight+Hotel Booking)</div>
                        <div class="mb-2">Book Flight + Hotel and Save up to 54% on Vacation Deals</div>
                        <a href="#" target="_blank" rel="noopener noreferrer">Plan a vacation</a>
                    </div>
                </div>
                <div>
                    <div className='service-booking'></div>
                    <div className='f-size-12-14'>
                        <div className='asap-tickets-container-title-ind'>Concierge Service</div>
                        <div class="mb-2">Every ASAP Tickets client can benefit from complementary Concierge Service</div>
                        <a href="#" target="_blank" rel="noopener noreferrer">See all Offers</a>
                    </div>
                </div>
                <div>
                    <div className='alltime-booking'></div>
                    <div className='f-size-12-14'>
                        <div className='asap-tickets-container-title-ind'>24/7 Live Support</div>
                        <div class="mb-2">Excellent service provided by all of our 1,700+ Live Travel Agents 24/7</div>
                        <a href="#" target="_blank" rel="noopener noreferrer">Get Help</a>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-center asapticketstitle">ASAP Tickets Story</h1>
        <div className='asap-tickets-many-year simpleandfast-container'>
            <div className='bg-blue f-size-12-14'>Today</div>
            <div class="bg-grey f-size-12-14">2021</div>
            <div class="bg-grey f-size-12-14">2020</div>
            <div class="bg-grey f-size-12-14">2019</div>
            <div class="bg-grey f-size-12-14">2018</div>
            <div class="bg-grey f-size-12-14">2017</div>
            <div class="bg-grey f-size-12-14">2016</div>
            <div class="bg-grey f-size-12-14">2014/15</div>
            <div class="bg-grey f-size-12-14">2013</div>
            <div class="bg-grey f-size-12-14">2012</div>
            <div class="bg-grey f-size-12-14">2011</div>
            <div class="bg-grey f-size-12-14">2010</div>
            <div class="bg-grey f-size-12-14">2009</div>
            <div class="bg-grey f-size-12-14">2007</div>
            <div class="bg-grey f-size-12-14">2006</div>
            <div class="bg-grey f-size-12-14">2005</div>
            <div class="bg-grey f-size-12-14">2004</div>
            <div class="bg-grey f-size-12-14">2001</div>
        </div>
        <div className='bg-light-blue'>
            <div className='simpleandfast-container'>
                <div style={{'position': 'relative'}}>
                <div class="left-icon-tickets"><svg class="down" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></div>
                <div>
                    <div className='asap-tickets-asoftoday'>
                        <div className='asap-tickets-asoftoday-pic'></div>
                        <div className='asoftoday-content'>
                        <div class="asoftoday-title">As of Today</div>
                            <div class="f-size-12-14">
                            ASAP Tickets continues to develop and plans to open new offices and solutions for independent agents.<br/><br/>Personalized service - <strong>1700+</strong> travel advisors | speaking <strong>20+ languages</strong><br/><br/><strong>150+</strong> Customer Support Agents <strong>available 24/7</strong><br/><br/>Insider deals | <strong>50+ partner airlines</strong>, cheap flights | <strong>200+</strong> airlines<br/><br/><strong>3,000,000+</strong> customers served
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-icon-tickets"><svg class="down" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></div>
                </div>
            </div>
        </div>
        <div className='accreditations-container simpleandfast-container'>
            <h1 class="accreditations-title text-center">Accreditations</h1>
            <div className='slick-track'>
                <div>
                    <div className='accre-content'>
                        <div>
                            <div className='accre-content-pic pic-0'></div>
                        </div>
                        <div class="f-size-12-14">A proud member of the American Society of Travel Agents (ASTA). ASTA is the world’s largest association of travel professionals. The majority of ASTA’s members are travel agencies. However, travel suppliers such as airlines, hotels, car rental firms, cruise lines, and tour operators can also join ASTA.</div>
                    </div>
                </div>
                <div>
                    <div className='accre-content'>
                        <div>
                            <div className='accre-content-pic pic-1'></div>
                        </div>
                        <div class="f-size-12-14">Accredited to work via Airlines Reporting Corporation’s (ARC) transaction settlement system. ARC is an airline-owned company serving the travel industry with financial services, data products and services, ticket distribution, original travel solutions, and settlement. Our ARC number is 05-578602.</div>
                    </div>
                </div>
                <div>
                    <div className='accre-content'>
                        <div>
                            <div className='accre-content-pic pic-2'></div>
                        </div>
                        <div class="f-size-12-14">Accredited member of the Better Business Bureau (BBB) with the highest A+ rating and BBBOnLine Reliability program. The BBB is the resource to turn to for objective, unbiased information.</div>
                    </div>
                </div>
                <div>
                    <div className='accre-content'>
                        <div>
                            <div className='accre-content-pic pic-3'></div>
                        </div>
                        <div class="f-size-12-14">Accredited by International Airlines Travel Agent Network (IATAN). IATAN is a department of the International Air Transport Association and has been servicing all aspects of the US Travel and Tourism industry for more than 35 years, its programs are recognized around the world. Our IATAN number is 05-578602.</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}