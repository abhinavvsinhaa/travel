export default function Modal({setisModal}){
    return(
        <>
            <div className='presentation d-flex justify-content-center align-items-center position-fixed' style={{'zIndex': '1300','inset': '0'}}>
            <div className='position-fixed' style={{'zIndex':'-1','inset':'0px','backgroundColor':'rgba(0, 0, 0, 0.5)'}}>
            </div>
            <div className='position-relative modal-callquery modal-width'>
              <div className='position-relative'>
                <div className='modal-close' onClick={() => {setisModal(false)}}>
                <svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor"><path d="M20 1.15L18.84 0 10 8.83 1.16 0 0 1.15 l8.84 8.84-8.84 8.84 1.16 1.16 8.84-8.84 8.84 8.84 1.16-1.16-8.84-8.84z"></path></svg>
                </div>
                <div className='py-4 modal-call-main'>
                  <div className='mx-3'>
                    <div>
                      <div className='text-center b-b-grey mb-2'>
                        <div className='assistance-img'>
                          <img src='https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2Fcallback%2Fcallback-staff.jpg&w=256&q=75'/>
                        </div>
                        <div className='fw-bold mb-1 mt-3' style={{'fontSize': '14px'}}>
                        Want airfares up to $300 lower than online?
                        </div>
                        <div style={{'fontSize': '12px','lineHeight': '1.8'}}>
                        We have thousands of lower unpublished deals that we cannot display online as those are restricted by airlines for offline sale only. Call our travel expert for
                        </div>
                        <div className='fw-bold' style={{'fontSize': '12px','textTransform': 'uppercase','lineHeight': '1.8'}}>
                        Phone special super deals
                        </div>
                        <div className='phoneblock'>
                        <a class="text-decoration-none fw-bold text-xl" href="tel:+1 650-263-1714" data-qa-phonenumber="1-650-263-1714"><svg class="text-normal" viewBox="0 0 21 21" width="1em" height="1em" fill="currentColor"><path d="M20.4,16.5c0-0.2-0.4-0.4-1.1-0.8 c-0.5-0.3-1.1-0.6-1.7-0.9l-0.8-0.4l-0.4-0.2 c-0.2-0.1-0.4-0.2-0.5-0.3c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-0.4,0.1-0.7,0.4 c-0.3,0.3-0.5,0.6-0.8,0.9s-0.5,0.6-0.8,0.9 c-0.3,0.3-0.5,0.4-0.6,0.4c-0.1,0-0.2,0-0.3-0.1c-0.3-0.1-0.6-0.3-0.9-0.5 c-1.2-0.7-2.3-1.5-3.3-2.5c-1.1-1.1-1.9-2.3-2.6-3.6 c-0.1-0.2-0.2-0.4-0.3-0.6c0-0.1-0.1-0.2-0.1-0.3c0-0.2,0.1-0.4,0.4-0.7 c0.3-0.3,0.6-0.5,0.9-0.8c0.3-0.2,0.6-0.5,0.9-0.8 c0.3-0.3,0.4-0.5,0.4-0.7c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.3-0.3-0.5 l-0.2-0.4c-0.3-0.5-0.6-1.1-0.9-1.7l-0.4-0.8 c-0.3-0.7-0.6-1-0.8-1.1c-0.1,0-0.2,0-0.3,0c-0.7,0-1.3,0.2-2,0.4 c-0.5,0.2-1,0.8-1.5,1.7c-0.6,1-0.8,2.2-0.7,3.4 c0,0.2,0.1,0.5,0.2,0.8c0.1,0.5,0.3,1,0.5,1.5l0.2,0.7 c0.3,0.9,0.7,1.8,1.2,2.5c0.9,1.4,1.9,2.6,3.1,3.8c1.3,1.3,2.5,2.3,3.8,3.1 c0.7,0.5,1.5,0.8,2.5,1.2c0.5,0.2,1,0.3,1.5,0.5c0.5,0.2,1,0.3,1.5,0.4 c1.2,0.1,2.4-0.1,3.4-0.7c1-0.5,1.5-1,1.7-1.5 C20.3,18,20.5,17.3,20.4,16.5L20.4,16.5z"></path></svg> 1-650-263-1714</a>
                          <div className='phonehint'>
                          Call Us Toll-Free
                          </div>
                        </div>
                        <div className='fw-bold mt-2 mb-5' style={{'fontSize': '16px'}}>
                        Free instant quotes | Live in 5 seconds
                        </div>
                        <div className='d-flex align-items-center mb-5'>
                          <div className='text-end almost-half'>
                            <div className='d-flex flex-column align-items-end me-3'>
                              <div className='fw-bolder ' style={{'fontSize': '40px' , 'lineHeight': '52px'}}>97%</div>
                              <div className='mb-1 text-muted' style={{'fontSize': '11px'}}>recommend us</div>
                              <div className='assistance-img'>
                                <img src='https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2Fcallback%2Ftrustpilot-ratings.png&w=96&q=75'/>
                              </div>
                            </div>
                          </div>
                          <div className='w-50 b-l-grey text-start' style={{'fontSize': '12px'}}>
                            <div className='ms-3 mb-3'>
                            ASAP Tickets is in the Top of the Best Rated Airline Ticket Agencies on Trustpilot
                            </div>
                            <a href='#' className='modal-trustpilot text-decoration-none d-flex lh-1'>
                              <div>
                              <img alt="trustpilot" srcset="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fimages-static.trustpilot.com%2Fapi%2Flogos%2Flight-bg%2Flogo.svg&amp;w=128&amp;q=75 1x, https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fimages-static.trustpilot.com%2Fapi%2Flogos%2Flight-bg%2Flogo.svg&amp;w=256&amp;q=75 2x" src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fimages-static.trustpilot.com%2Fapi%2Flogos%2Flight-bg%2Flogo.svg&amp;w=256&amp;q=75" decoding="async" data-nimg="fixed"/>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='context-for-modal m-auto d-flex justify-content-between align-items-center' style={{'maxWidth':'340px'}}>
                          <div className='assistance-img'>
                            <img src='https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2FairlinePage%2FASAP_badge_BBB_A_plus.svg&w=96&q=75'/>
                          </div>
                          <div className='assistance-img'>
                            <img src='https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2FairlinePage%2FASAP_badge_20_languages.svg&w=64&q=75'/>
                          </div>
                          <div className='assistance-img'>
                            <img style={{'width': '95px','height': '24px'}} src='https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2FairlinePage%2F20yearsPlus.svg&w=96&q=75'/>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}