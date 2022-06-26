import React from "react";
import './Hero.css';
// Assets
import lowestFares from '../../assets/lowest-fares.svg'
import security from '../../assets/security.svg'
import liveService from '../../assets/live-service.svg'
const Hero = () => {
    return (
        <>
         <div className="container-fluid hero-outer-container">
            <div className="container-fluid hero-inner-container">
                <div className="container">
                    <div className="row">
                        <p className="hero-headline">
                            <br />
                            Book cheap flights and save upto 50% OFF
                        </p>
                    </div>
                    <br />
                    <div className="row subheadline-row">
                        <div className="col-xl-3 col">
                            <p className="hero-subheadline">
                                <span>30+</span>
                                &nbsp;
                                quotes in seconds
                            </p>
                        </div>
                        <div className="col-xl-3 col">
                            <p className="hero-subheadline">
                                <span>$287+</span>
                                &nbsp;
                                savings on each ticket
                            </p>
                        </div>
                        <div className="col-xl-3 col">
                            <p className="hero-subheadline">
                                <span>100%</span>
                                &nbsp;
                                free service
                            </p>
                        </div>
                        <div className="col-xl-3">
                            <p className="hero-subheadline">
                                <span>3+ mn</span>
                                &nbsp;
                                tickets sold
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Call only discount */}
        <div className="container-fluid hero-deals-outer">
            <div className="container">
                <div 
                className="row justify-content-center" 
                style={{
                    paddingTop: '8px', 
                    paddingBottom: '8px', 
                    margin: 0
                }}>
                    <div 
                    className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12" 
                    style={{
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}>
                        <p style={{
                            textAlign: 'center',
                            fontWeight: 600, 
                            color: 'white', 
                            margin: 0
                        }}>
                            CALL ONLY: 
                            <span style={{color: '#FFDA3E'}}> UP TO 300$ LOWER THAN ONLINE! </span>
                            SAVE EXTRA 30$ WITH CODE [ASAP30]
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Lowest fares guaranteed, .. */}
        <div className="container-fluid lowestFares-container">
            <div className="container">
                <div className="row justify-content-center">
                    <div 
                    className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12"
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}
                    >
                        <img src={lowestFares} alt="" width="100px"/>
                        <div style={{
                            marginLeft: '20px'
                        }}>
                            <p style={{fontWeight: 600}}>Lowest Fares Guaranteed</p>
                            <p style={{opacity: 0.8, fontSize: '12px'}}>Discount phone-exclusive airfares with partner airlines unavailable online with "Book Now, Pay Later" option</p>
                        </div>
                    </div>
                    <div 
                    className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12"
                    style={{
                        display: 'flex'
                    }}
                    >
                        <img src={security} alt="" width="60px"/>
                        <div style={{
                            marginLeft: '20px'
                        }}>
                            <p style={{fontWeight: 600}}>Ultra-Secure & Trusted</p>
                            <p style={{opacity: 0.8, fontSize: '12px'}}>Your privacy and data security is always our number-one priority - and we're endorsed by BBB, ARC, IATAN</p>
                        </div>
                    </div>                    
                    <div 
                    className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12"
                    style={{
                        display: 'flex'
                    }}
                    >
                        <img src={liveService} alt="" width="80px"/>
                        <div style={{
                            marginLeft: '20px'
                        }}>
                            <p style={{fontWeight: 600}}>Award-Winning Live Service</p>
                            <p style={{opacity: 0.8, fontSize: '12px'}}>Talking to robots can be tough. Travel worry-free knowing that 1700+ agents are always here to help you
</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;