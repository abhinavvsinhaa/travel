import './FeedbackFooter.css'
import { NavLink } from "react-router-dom";
export default function FeedbackFooter({isModal,setisModal}){
    return(
        <>
        <div className='simpleandfast-container border-top'>
            <div>
                <div className='flex-for-rating'>
                <h3 className="nineseven-travelers">97% Of Travelers Recommend ASAP Tickets</h3>
                <div className='rating-div'>
                    <div className='mt-2'>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    <span className="rating-star d-inline-block"><svg className="star-icon" width="1em" height="1em" viewBox="64 64 896 896" fill="currentColor" color="#fb0"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1 c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2 l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3 l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754 l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9 l-43.4-252.9 183.7-179.1 c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></span>
                    </div>
                </div>
                <div style={{'fontSize' : '14px'}}>
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
            <div className='bg-dark-blue w-100 pb-5'>
                <div className='page-container p-3'>
                    <div className='footer-main-container'>
                        <div className='footer-main-item'>
                            <div>
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white py-2"><div>Top Flight Destinations</div><div class="mob ">&lt;</div></h3>
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
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white py-2"><div>Popular Airlines</div><div class="mob ">&lt;</div></h3>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">United</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Philippine Airlines</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Turkish Airlines</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Lufthansa</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Ethiopian Airlines</a></span>
                            </div>
                        </div>
                        <div className='footer-main-item'>
                            <div>
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white py-2"><div>Company Links</div><div class="mob ">&lt;</div></h3>
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
                            <h3 style={{'fontSize': '12px'}} class="fw-bold text-white py-2"><div>Contact Us</div><div class="mob ">&lt;</div></h3>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Chat with Us</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Email us</a></span>
                            <span className='hidden'><a href="#" style={{'fontSize': '12px','color': 'rgb(185, 185, 185)'}}  class="d-block text-decoration-none py-2 " target="">Call us</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='page-container py-3'>
                    <div className="mb-5" style={{'borderTop': '1px solid rgb(121, 126, 134)'}}></div>
                    <div className='footer-main-container align-items-center justify-content-between'>
                    <div className='footer-str-img'>
                        <div style={{'overflow': 'hidden','boxSizing': 'border-box','display': 'inline-block','position': 'relative','width':'58px','height': '40px'}}>
                            <img className='itnlogo' src="https://www.asaptickets.com/_next/image?url=%2Fstatic%2Fimg%2Ffooter%2FITN.svg&w=64&q=75" alt="" srcset="" />
                        </div>
                    </div>
                    <div className='copyright-section'>
                        <div style={{'fontSize': '10px'}} className='text-muted px-3 lh-sm'>ASAP Tickets is a brand of International Travel Network LLC, major international consolidator for travel and related services. © 2022 International Travel Network LLC. All rights reserved. CST 2077868-40;</div>
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
                    <div className='mt-4 px-3 ourpartners'>
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