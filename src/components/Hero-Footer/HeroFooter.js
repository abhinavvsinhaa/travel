import './HeroFooter.css'
export default function HeroFooter(){
    return(
        <>
        <div className='hero-footer-container'>
            <div style={{'padding': '20px'}}>
                <h2 className="fw-bold" style={{'marginBottom':'15px'}}>Save Money &amp; Time with ASAP Tickets</h2>
                <div className='text-muted text-justify' style={{'fontSize':'12px'}}>
                As one of the US leading travel agencies, we are 100% devoted to make sure your flight booking experience is worried-free. Whether you’re going on holiday, taking a business trip, or go home to your loved ones, ASAP Tickets is here to help you travel the world with the most affordable airfares. With our easy-to-use website along with 24/7 customer services, getting a FREE quote couldn’t be simpler. Remember, we are only one-call away and you are only one step away from your dream destination.
                </div>
            </div>
            <div className='hero-footer-content d-flex justify-content-between flex-column' style={{'padding':'20px','marginBottom':'15px'}}>
                <div>
                    <div>
                        <div>
                            <div className='fw-bold main-bold-of-herofooter'>
                                1700+
                            </div>
                            <div>
                                <b>Live Agents</b>
                            </div>
                        </div>
                        <div style={{'fontSize':'12px'}}>speak 20+ languages worldwide</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div className='fw-bold main-bold-of-herofooter'>
                                800,000+
                            </div>
                            <div>
                                <b>Flights Booked</b>
                            </div>
                        </div>
                        <div style={{'fontSize':'12px'}}>with avg $287 savings per ticket</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div className='fw-bold main-bold-of-herofooter'>
                                120,000+
                            </div>
                            <div>
                                <b>People Every Month</b>
                            </div>
                        </div>
                        <div style={{'fontSize':'12px'}}>request new flight quotes</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div className='fw-bold main-bold-of-herofooter'>
                                175,000+
                            </div>
                            <div>
                                <b>Happy Return Clients</b>
                            </div>
                        </div>
                        <div style={{'fontSize':'12px'}}>with highest 5-star reviews</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <div className='fw-bold main-bold-of-herofooter'>
                                10,000+
                            </div>
                            <div>
                                <b>Exclusive Deals</b>
                            </div>
                        </div>
                        <div style={{'fontSize':'12px'}}>with 50+ partner airlines</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}