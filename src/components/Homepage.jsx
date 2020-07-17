import React from "react";
import "../styles/homepage.css";

const Homepage = () => {
 
  return (
    <div className="hp-main">
      <div className="top-hp">
        <img src="https://i.imgur.com/yiOxVwl.png" alt="info" />
        <h1>The Smile Trust</h1>
        <p>
          {" "}
          In the face of COVID-19, we understand that things have become hard
          for everyone and we are trying to offer help to those in need.
        </p>
      </div>

      <div className="assistance">
       <a href="/Checkboxes"> <button  >I need assistance</button>
      </a>
      </div>
      <div className="hp-img">
        <img
          src="https://www.sheknows.com/wp-content/uploads/2019/04/teaching-daughters-about-female-empowerment-at-every-age.png?w=695&h=391&crop=1"
          alt="community helping"
        />
      </div>
      <div className="hp-info">
        <h2>Solidarity Not Charity</h2>
        <p>
          {" "}
          We understand that these are hard times. As a community, we
          can help each other get through this. The Smile Trust, Inc has created
          a mutual aid fund to offer food & supply to families and individuals
          in need.{" "}
        </p>
      </div>
      <div className="hp-img">
        <img
          src="https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Ask-Help-COVID.jpg"
          alt="Delivering boxes"
        />
      </div>
      <div className="hp-info">
        <h2>Who Qualifies?</h2>
        <p>
          {" "}
          Families in need who reside in Miami-Dade and Atlanta. Mothers who
          have children under the age of two years old. Once we will receive
          your request, we will contact you and explain all the details.
        </p>
      </div>
      <div className="hp-img">
        <img
          src="https://i.imgur.com/nJBTcxR.png"
          alt="Cartoon of the people helping the world"
        />
      </div>
      <div className="hp-info">
        <h2>Can I Help?</h2>
        <p>
          If you currently do not need assistance and you would like to help
          those who do, please donate to The Smile Trust, Inc at
          www.mthsmile.com/donate. If you would like to sponsor an individual or
          a family please email us at mthsmia@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
