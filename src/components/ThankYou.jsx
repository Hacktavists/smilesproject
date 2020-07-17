import React from "react";
import "../styles/ThankYou.css";
import blueconfirmation from "./images/blueconfirmation.png";
import Handshake from "./images/Handshake.png";
import Page3 from "./images/Page3.png";

const ThankYou = () => {
  return (
    <div>
      <div>
        <img className="pagination" src={Page3} alt="Pagination Icon" />
      </div>
      <div>
        <img src={Handshake} alt="Handshake" />
      </div>
      <div>
        <p className="ThankYou">THANK YOU!</p>
        <p className="request">
          We received your request and we will contact you in the next 24 hours.
        </p>
      </div>
      <div>
        <img className="blueimg" src={blueconfirmation} alt="People Waving" />
      </div>
      <div>
        <p className="reviveText">
          We strive to revive, reinvigorate, and heal every individual we
          service while doing so with a Smile!
        </p>
      </div>
      <div>
        <p className="contactus">Contact us</p>
      </div>
      <div className="contactinfo">
        <div className="smile">THE SMILE TRUST</div>
        <div className="city">Miami, FL</div>
        <div className="phone">Phone: 786-877-7826</div>
        <div className="email">
          Email: <a href="mailto:info@mthsmile.com">info@mthsmile.com</a>
        </div>
      </div>
      <div>
        <p className="questions">
          If you have any questions about our programs or how you can help us on
          our journey to heal our communities we'd love to hear from you.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
