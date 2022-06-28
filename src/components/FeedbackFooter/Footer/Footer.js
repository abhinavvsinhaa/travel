import { NavLink } from "react-router-dom";
export default function Footer({isModal,setisModal}){
    return(
        <>
            <footer>
            <div className='bg-dark-blue w-100 footer-hlinks'>
                <div className='block-wrapper'>
                    <div className='footer-hlinks-container'>
                        <div className='footer-hlinks-item'>
                        <a class="d-block lh-1 asapvac" href="#"></a>
                        </div>
                        <div className='footer-hlinks-item'>
                        <a class="d-block lh-1 asapcan" href="#"></a>
                        </div>
                        <div className='footer-hlinks-item'>
                        <a class="d-block lh-1 asapticks" href="#"></a>
                        </div>
                        <div className='footer-hlinks-item'>
                        <a class="d-block lh-1 asapes" href="#"></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark-blue w-100' style={{'paddingBottom':'70px'}}>
                <div className='page-container' style={{'padding':'20px'}}>
                    <div className='footer-main-container'>
                        <div className='footer-main-item'>
                            <div>
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white"><div>Top Flight Destinations</div><div class="mob ">&lt;</div></h3>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Philippines</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Italy</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">United Kingdom</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Spain</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Nigeria</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">France</a></span>
                            </div>
                        </div>
                        <div className='footer-main-item'>
                            <div>
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white"><div>Top Vacation Cities</div><div class="mob ">&lt;</div></h3>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">United</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Philippine Airlines</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Turkish Airlines</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Lufthansa</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Ethiopian Airlines</a></span>
                            </div>
                        </div>
                        <div className='footer-main-item'>
                            <div>
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white"><div>Popular Airlines</div><div class="mob ">&lt;</div></h3>
                            <span className='hidden'><NavLink to="/about" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 ">About Us</NavLink></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Privacy Policy</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Terms and Conditions</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Disclaimer</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Cancellation Policy</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Refund Policy</a></span>
                            </div>
                        </div>
                        <div className='footer-main-item'>
                            <div>
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white"><div>Help</div><div class="mob ">&lt;</div></h3>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Chat with Us</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Email us</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Call us</a></span>
                            </div>
                        </div>
                        <div className='footer-main-item'>
                            <div>
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white"><div>About Us</div><div class="mob ">&lt;</div></h3>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Chat with Us</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Email us</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Call us</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='page-container' style={{'padding':'0px 20px'}}>
                    <div className="hid-sm mb-5" style={{'borderTop': '1px solid rgb(121, 126, 134)'}}></div>
                    <div className='footer-main-container align-items-center justify-content-between'>
                    <div className='footer-str-img'>
                        <div style={{'overflow': 'hidden','boxSizing': 'border-box','display': 'inline-block','position': 'relative','width':'58px','height': '40px'}}>
                            <img className='itnlogo' src="https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2Ffooter%2FITN.svg&w=64&q=75" alt="" srcset="" />
                        </div>
                    </div>
                    <div className='copyright-section'>
                        <div style={{'fontSize': '10px','lineHeight':'1.8'}} className='text-muted py-3'>ASAP Tickets is a brand of International Travel Network LLC, major international consolidator for travel and related services.&nbsp;© 2022&nbsp;International Travel Network LLC. All rights reserved. CST 2077868-40;</div>
                    </div>
                    <div className='social-links'>
                        <div className='d-flex justify-content-between'>
                            <a target="_blank" rel="noopener noreferrer" class="social-links-a d-block position-relative facebook" title="Follow us on Facebook" data-qa-social-icon="facebook"></a>
                            <a target="_blank" rel="noopener noreferrer" class="social-links-a d-block position-relative instagram" title="Follow us on Instagram" data-qa-social-icon="facebook"></a>
                            <a target="_blank" rel="noopener noreferrer" class="social-links-a d-block position-relative youtube" title="Youtube" data-qa-social-icon="facebook"></a>
                            <a target="_blank" rel="noopener noreferrer" class="social-links-a d-block position-relative twitter" title="Follow us on Twitter" data-qa-social-icon="facebook"></a>
                            <a target="_blank" rel="noopener noreferrer" class="social-links-a d-block position-relative blog" title="Our Blog" data-qa-social-icon="facebook"></a>
                        </div>
                    </div>
                    </div>
                    <div className='mt-4 ourpartners'>
                        <div className='d-flex justify-content-between' style={{'opacity': '0.3'}}>
                            <div className='partners-ind bbb'></div>
                            <div className='partners-ind arc'></div>
                            <div className='partners-ind iatan'></div>
                            <div className='partners-ind asta'></div>
                            <div className='partners-ind cst'></div>
                            <div className='partners-ind visa'></div>
                            <div className='partners-ind mastercard'></div>
                            <div className='partners-ind american'></div>
                            <div className='partners-ind discover'></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {
            isModal? '' :
        <div className='callus-button position-fixed'>
            <div>
                <div className='callus-button-main'>
                    <button className='rounded-circle position-relative cursor-pointer'>
                    <span style={{'fontSize': '22px' , 'lineHeight': '70px'}} class=" w-100 h-100 align-v-center"><svg class="icon-phone" viewBox="0 0 21 21" width="1em" height="1em" fill="currentColor"><path d="M20.4,16.5c0-0.2-0.4-0.4-1.1-0.8 c-0.5-0.3-1.1-0.6-1.7-0.9l-0.8-0.4l-0.4-0.2 c-0.2-0.1-0.4-0.2-0.5-0.3c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.4,0.1-0.7,0.4 c-0.3,0.3-0.5,0.6-0.8,0.9s-0.5,0.6-0.8,0.9 c-0.3,0.3-0.5,0.4-0.6,0.4c-0.1,0-0.2,0-0.3-0.1c-0.3-0.1-0.6-0.3-0.9-0.5 c-1.2-0.7-2.3-1.5-3.3-2.5c-1.1-1.1-1.9-2.3-2.6-3.6 c-0.1-0.2-0.2-0.4-0.3-0.6c0-0.1-0.1-0.2-0.1-0.3c0-0.2,0.1-0.4,0.4-0.7 c0.3-0.3,0.6-0.5,0.9-0.8c0.3-0.2,0.6-0.5,0.9-0.8 c0.3-0.3,0.4-0.5,0.4-0.7c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.3-0.3-0.5 l-0.2-0.4c-0.3-0.5-0.6-1.1-0.9-1.7l-0.4-0.8 c-0.3-0.7-0.6-1-0.8-1.1c-0.1,0-0.2,0-0.3,0c-0.7,0-1.3,0.2-2,0.4 c-0.5,0.2-1,0.8-1.5,1.7c-0.6,1-0.8,2.2-0.7,3.4 c0,0.2,0.1,0.5,0.2,0.8c0.1,0.5,0.3,1,0.5,1.5l0.2,0.7 c0.3,0.9,0.7,1.8,1.2,2.5c0.9,1.4,1.9,2.6,3.1,3.8c1.3,1.3,2.5,2.3,3.8,3.1 c0.7,0.5,1.5,0.8,2.5,1.2c0.5,0.2,1,0.3,1.5,0.5c0.5,0.2,1,0.3,1.5,0.4 c1.2,0.1,2.4-0.1,3.4-0.7c1-0.5,1.5-1,1.7-1.5 C20.3,18,20.5,17.3,20.4,16.5L20.4,16.5z"></path></svg></span>
                    </button>
                    <div style={{'fontSize': '12px'}} onClick={() => {setisModal(true)}} className='button-hover-expand flag position-absolute '>
                        <div className='assistance-img'>
                           
                            <img src="https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2Fcallback%2Fcallback-hover.png&w=256&q=75" alt="" />
                        </div>
                        <div className='p-2 fw-bold'>
                        <span>Call Us to Get Deals </span>
                        <span class="bg-white text-green">&nbsp;up to $300&nbsp;</span>
                        <div>lower than online</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}