import React from "react";
import './ContactUs.css';
export default function ContactUs(){
    document.title = 'Contact ASAP Tickets (800) 737-2238 -   Live Travel Agents Available 24/7'
    return(
        <>
        <div className="contact-us-main">
                <h1><strong>Contact Us</strong></h1>
                <br/>
                If you have any questions related to new reservations, existing reservations, billing (or any other travel related issues), please feel free to contact us by phone or e-mail during our regular business hours.
                <br/>
                <h4><strong>New Reservations</strong></h4>
                <div className="new-reservations flex-justify">
                    <div>
                    <strong className="text-uppercase d-inline">
                    usa/canada &nbsp;
                    <span class="flag-us-block d-inline-block"></span>
                    &nbsp;
                    <span class="flag-canada-block d-inline-block"></span>
                    </strong>
                    <div>Economy Class:<a class="phone-btn" href="tel:+18885852727" data-qa-phonenumber="888-585-2727"> 888-585-2727</a></div>
                    <div>Business &amp; First Class:<a class="phone-btn" href="tel:+18006057769" data-qa-phonenumber="800-605-7769"> 800-605-7769</a></div>
                    <div>E-mail:<a class="underline" href="mailto:info@asaptickets.com">info@asaptickets.com</a></div>
                    Monday - Sunday: 24/7
                    </div>
                    <div>
                    <strong className="text-uppercase d-inline">
                    asap vacations
                    </strong>
                    <div>Phone:<a class="phone-btn" href="tel:+18885852727" data-qa-phonenumber="888-222-6408"> 888-222-6408</a></div>
                    <div>E-mail:<a class="underline" href="mailto:vacations@asaptickets.com">vacations@asaptickets.com</a></div>
                    Monday - Sunday: 24/7
                    </div>
                    <div>
                    <strong className="text-uppercase d-inline">
                    group travel
                    </strong>
                    <div>Group Travel Desk:<a class="phone-btn" href="tel:+18883338644" data-qa-phonenumber="888-333-8644"> 888-333-8644</a></div>
                    <div>E-mail:<a class="underline" href="mailto:grouptravel@asaptickets.com">grouptravel@asaptickets.com</a></div>
                    Monday - Sunday: 24/7
                    </div>
                    <div>
                    <strong className="text-uppercase d-inline">
                    international number
                    </strong>
                    <div>Phone:<a class="phone-btn" data-qa-phonenumber="1-650-263-1714"> 1-650-263-1714</a></div>
                    <div>Skype:<a class="underline">asaptickets.com</a>(Toll-free all countries)</div>
                    Monday - Sunday: 24/7
                    </div>
                </div>
                <div className="flex-justify">
                <div>
                    <h4><strong>Customer Service</strong></h4>
                    <div className="d-flex">
                        <div className="me-4">
                            <div className="mt-1">
                            <span class="d-inline-block flag-us-block"></span>
                            &nbsp;
                            <span class="d-inline-block flag-canada-block"></span>
                            <a class="no-decoration phone-btn hover-danger bold" href="tel:+18007502238" data-qa-phonenumber="800-750-2238">800-750-2238</a>
                            </div>
                            <div className="mt-1">
                            <span class="d-inline-block flag-ph-block"></span>
                            <a class="no-decoration phone-btn hover-danger bold" href="tel:+63282993987" data-qa-phonenumber="(+632) 8299-3987"> (+632) 8299-3987</a>
                            </div>
                            <div className="mt-1">
                            <span class="d-inline-block flag-es-block"></span>
                            <a class="no-decoration phone-btn hover-danger bold" href="tel:+34911881607" data-qa-phonenumber="+34-911-881-607"> +34-911-881-607</a>
                            </div>
                        </div>
                        <div>
                            <div className="mt-1">
                            <span class="d-inline-block flag-it-block"></span>
                            <a class="no-decoration phone-btn hover-danger bold" href="tel:+390694809637" data-qa-phonenumber="+39-06-94809637"> +39-06-94809637</a>
                            </div>
                            <div className="mt-1">
                            <span class="d-inline-block flag-il-block"></span>
                            <a class="no-decoration phone-btn hover-danger bold" href="tel:+97237219252" data-qa-phonenumber="+972-3-7219252"> +972-3-7219252</a>
                            </div>
                            <div className="mt-1">
                            <span class="d-inline-block flag-gb-block"></span>
                            <a class="no-decoration phone-btn hover-danger bold" href="tel:+442036950964" data-qa-phonenumber="+44-203-695-0964"> +44-203-695-0964</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                    E-mail: 
                    <a class="underline" href="mailto:customerservice@asaptickets.com">customerservice@asaptickets.com</a>
                    <br/>
                    Monday - Sunday: 24/7
                    </div>
                </div>
                <div>
                <h4><strong>Billing</strong></h4>
                <div>Phone: <a class="no-decoration phone-btn hover-danger bold" href="tel:+448009814523" data-qa-phonenumber="+44-800-981-4523"> +44-800-981-4523</a></div>
                <div>E-mail: <a class="underline" href="mailto:billing@asaptickets.com">billing@asaptickets.com</a></div>
                Monday - Friday: 8am - 4pm PST
                </div>
                <div>
                <h4><strong>Mailing Address</strong></h4>    
                1000 N West Street, Suite 1200, 
                <br/>
                Wilmington, DE 19801
                </div>
                </div>

            
        </div>
        </>
    )
}