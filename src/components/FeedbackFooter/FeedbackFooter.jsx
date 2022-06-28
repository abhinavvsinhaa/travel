import './FeedbackFooter.css'
export default function FeedbackFooter(){
    return(
        <>
        <div className='simpleandfast-container border-top'>
            <div>
                <div style={{'marginBottom':'30px'}} className='flex-for-rating'>
                <h3 className="nineseven-travelers xs-center">97% Of Travelers Recommend ASAP Tickets</h3>
                <div className='xs-center rating-div'>
                    <div className='mt-2'>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    </div>
                </div>
                <div className='xs-center' style={{'fontSize' : '14px'}}>
                <strong>4.7</strong>
                <strong>&nbsp;out of 5 </strong>
                 Based on 
                 425466
                 reviews
                </div>
                </div>
            </div>
            <div className='rating-content-div'>
                <div className='mt-4 position-relative overflow-hidden'>
                    <div className='reviews-list'>
                        <div>
                            <div className=' mb-2 review-list-item'>
                                <div>
                                    <div>
                                    <p className="d-inline-block fw-bold me-2 mb-0 text-capitalize">sophia</p>
                                    <div className='d-inline-block'>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#bec4ce"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    
                                    
                                    
                                    </div>
                                    <div style={{'fontSize': '12px' , 'color': 'rgb(138, 138, 138)'}} className="mt-1">Honolulu - Manchester</div>
                                    </div>
                                    <div className='my-1'>
                                        <div className='rating-comp-image'>
                                            <div>
                                                <img src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fasaptickets.com%2Fairlines-logo%2Fresult_no_bg%2Fua.png&w=96&q=75" alt="" srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{'fontSize': '14px'}}><span>Hertz was very helpful, kind, informative, and prompt. Thank you.</span></div>
                                <div className="mt-2" style={{'fontSize': '10px' , 'color': 'rgb(138, 138, 138)'}}>06/19/2022</div>
                            </div>
                        </div>
                        <div>
                            <div className=' mb-2 review-list-item'>
                                <div>
                                    <div>
                                    <p className="d-inline-block fw-bold me-2 mb-0 text-capitalize">javan</p>
                                    <div className='d-inline-block'>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    
                                    
                                    
                                    </div>
                                    <div style={{'fontSize': '12px' , 'color': 'rgb(138, 138, 138)'}} className="mt-1">Washington - Nairobi</div>
                                    </div>
                                    <div className='my-1'>
                                        <div className='rating-comp-image'>
                                            <div>
                                                <img src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fasaptickets.com%2Fairlines-logo%2Fresult_no_bg%2Fkl.png&w=96&q=75" alt="" srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{'fontSize': '14px'}}><span>Lana was wonderful. She made it a breeze - from start to finish. My family and I had our tickets purchased for a price you couldn't beat - and told our extended family we were coming all within an hour.</span></div>
                                <div className="mt-2" style={{'fontSize': '10px' , 'color': 'rgb(138, 138, 138)'}}>06/19/2022</div>
                            </div>
                        </div>
                        <div>
                            <div className=' mb-2 review-list-item'>
                                <div>
                                    <div>
                                    <p className="d-inline-block fw-bold me-2 mb-0 text-capitalize">Remedios</p>
                                    <div className='d-inline-block'>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    
                                    
                                    
                                    </div>
                                    <div style={{'fontSize': '12px' , 'color': 'rgb(138, 138, 138)'}} className="mt-1">Los Angeles - Manila</div>
                                    </div>
                                    <div className='my-1'>
                                        <div className='rating-comp-image'>
                                            <div>
                                                <img src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fasaptickets.com%2Fairlines-logo%2Fresult_no_bg%2Fpr.png&w=96&q=75" alt="" srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{'fontSize': '14px'}}><span>Very commendable! Outstanding! Thank you very much Ann! Keep up your good work! God bless you and your family!</span></div>
                                <div className="mt-2" style={{'fontSize': '10px' , 'color': 'rgb(138, 138, 138)'}}>06/19/2022</div>
                            </div>
                        </div>
                        <div>
                            <div className=' mb-2 review-list-item'>
                                <div>
                                    <div>
                                    <p className="d-inline-block fw-bold me-2 mb-0 text-capitalize">adeola</p>
                                    <div className='d-inline-block'>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#bec4ce"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    
                                    
                                    
                                    </div>
                                    <div style={{'fontSize': '12px' , 'color': 'rgb(138, 138, 138)'}} className="mt-1">Ontario - Lagos</div>
                                    </div>
                                    <div className='my-1'>
                                        <div className='rating-comp-image'>
                                            <div>
                                                <img src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fasaptickets.com%2Fairlines-logo%2Fresult_no_bg%2Fua.png&w=96&q=75" alt="" srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{'fontSize': '14px'}}><span>Chahat is an exceptional help to us. We shall recommend her to friends and buy ticket from her in the nearest future. Thanks Chahat for your great assistance and for not giving up on us.</span></div>
                                <div className="mt-2" style={{'fontSize': '10px' , 'color': 'rgb(138, 138, 138)'}}>06/19/2022</div>
                            </div>
                        </div>
                        <div>
                            <div className=' mb-2 review-list-item'>
                                <div>
                                    <div>
                                    <p className="d-inline-block fw-bold me-2 mb-0 text-capitalize">sophia</p>
                                    <div className='d-inline-block'>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#bec4ce"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    
                                    
                                    
                                    </div>
                                    <div style={{'fontSize': '12px' , 'color': 'rgb(138, 138, 138)'}} className="mt-1">Honolulu - Manchester</div>
                                    </div>
                                    <div className='my-1'>
                                        <div className='rating-comp-image'>
                                            <div>
                                                <img src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fasaptickets.com%2Fairlines-logo%2Fresult_no_bg%2Fua.png&w=96&q=75" alt="" srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{'fontSize': '14px'}}><span>Hertz was very helpful, kind, informative, and prompt. Thank you.</span></div>
                                <div className="mt-2" style={{'fontSize': '10px' , 'color': 'rgb(138, 138, 138)'}}>06/19/2022</div>
                            </div>
                        </div>
                        <div>
                            <div className=' mb-2 review-list-item'>
                                <div>
                                    <div>
                                    <p className="d-inline-block fw-bold me-2 mb-0 text-capitalize">sophia</p>
                                    <div className='d-inline-block'>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#bec4ce"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    
                                    
                                    
                                    </div>
                                    <div style={{'fontSize': '12px' , 'color': 'rgb(138, 138, 138)'}} className="mt-1">Honolulu - Manchester</div>
                                    </div>
                                    <div className='my-1'>
                                        <div className='rating-comp-image'>
                                            <div>
                                                <img src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fasaptickets.com%2Fairlines-logo%2Fresult_no_bg%2Fua.png&w=96&q=75" alt="" srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{'fontSize': '14px'}}><span>Hertz was very helpful, kind, informative, and prompt. Thank you.</span></div>
                                <div className="mt-2" style={{'fontSize': '10px' , 'color': 'rgb(138, 138, 138)'}}>06/19/2022</div>
                            </div>
                        </div>
                        <div>
                            <div className=' mb-2 review-list-item'>
                                <div>
                                    <div>
                                    <p className="d-inline-block fw-bold me-2 mb-0 text-capitalize">sophia</p>
                                    <div className='d-inline-block'>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#bec4ce"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    
                                    
                                    
                                    </div>
                                    <div style={{'fontSize': '12px' , 'color': 'rgb(138, 138, 138)'}} className="mt-1">Honolulu - Manchester</div>
                                    </div>
                                    <div className='my-1'>
                                        <div className='rating-comp-image'>
                                            <div>
                                                <img src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fasaptickets.com%2Fairlines-logo%2Fresult_no_bg%2Fua.png&w=96&q=75" alt="" srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{'fontSize': '14px'}}><span>Hertz was very helpful, kind, informative, and prompt. Thank you.</span></div>
                                <div className="mt-2" style={{'fontSize': '10px' , 'color': 'rgb(138, 138, 138)'}}>06/19/2022</div>
                            </div>
                        </div>
                        <div>
                            <div className=' mb-2 review-list-item'>
                                <div>
                                    <div>
                                    <p className="d-inline-block fw-bold me-2 mb-0 text-capitalize">sophia</p>
                                    <div className='d-inline-block'>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    <span className="rating-star-small d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#bec4ce"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                                    
                                    
                                    
                                    </div>
                                    <div style={{'fontSize': '12px' , 'color': 'rgb(138, 138, 138)'}} className="mt-1">Honolulu - Manchester</div>
                                    </div>
                                    <div className='my-1'>
                                        <div className='rating-comp-image'>
                                            <div>
                                                <img src="https://www.asaptickets.com/_next/image?url=https%3A%2F%2Fasaptickets.com%2Fairlines-logo%2Fresult_no_bg%2Fua.png&w=96&q=75" alt="" srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{'fontSize': '14px'}}><span>Hertz was very helpful, kind, informative, and prompt. Thank you.</span></div>
                                <div className="mt-2" style={{'fontSize': '10px' , 'color': 'rgb(138, 138, 138)'}}>06/19/2022</div>
                            </div>
                        </div>
                    </div>
                    <ul style={{'display': 'block'}} className='slick-custom-dots'>
                    <li className="slick-dots-li slick-active"><div style={{'width': '10px' , 'height': '10px'}}></div></li>
                    <li className="slick-dots-li"><div style={{'width': '10px' , 'height': '10px'}}></div></li>
                    </ul>
                </div>
            </div>
            <a href="/reviews" className="viewallreviews">VIEW ALL REVIEWS</a>
        </div>
        <div style={{'padding': '40px 0px', 'backgroundColor': "rgb(233, 242, 250)"}}>
            <div className='position-relative'>
                <div className='getinstantfree'>
                    <h3 className="mb-4" style={{'padding': '0px 30px','fontWeight': '600','fontSize': '16px'}}>Get Instant FREE access to unpublished hand-picked deals!</h3>
                    <div className='mb-4 px-2' style={{'fontSize': '14px'}}>
                    There is a reason why more than 292,000 travelers choose ASAP Tickets to save on their flights!
                    </div>
                    <form className='subscribe-form'>
                        <div className='form-floating mb-4 position-relative w-100'>
                        <input type="email" class="form-control" id="floatingInput" placeholder="Your best email"/>
                        <label for="floatingInput">Your best email</label>
                        </div>
                        <button class="subscribe-button">Subscribe</button>
                    </form>      
                </div>
                <div className='disclaimer-footer'>
                    <span>100% Privacy Guaranteed! By providing your email you consent to receive occasional promotional Emails from asaptickets.com. You also agree to our&nbsp;<a href="/customer-service/rules-conditions" class="" target="_blank">T&amp;Cs</a>and <a href="/privacy" class="" target="_blank">Privacy Policy</a></span>
                </div>
            </div>
        </div>
        </>
    )
}