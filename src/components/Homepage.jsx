import React from 'react';
import '../styles/homepage.css';
import Navbar from "./Navbar";

const Homepage = () => {
    return (
        <div>${Navbar}</div>
        <div className="hp-main">
            <div className="top-hp"> 
            <img 
            src="https://i.imgur.com/yiOxVwl.png"
            alt="info" 
            />
            <h1>
                The Smile Trust
            </h1>
            <p> In the face of COVID-19, we understand that things
                 have become hard for everyone and we are trying to 
                 offer some help to those in need.</p>
            </div>
            <hr />
            <div className="assistance"> 
                <button>
                    I need assistance
                </button>
             </div>
            <div className="hp-img"> 
            <img 
            src="https://www.sheknows.com/wp-content/uploads/2019/04/teaching-daughters-about-female-empowerment-at-every-age.png?w=695&h=391&crop=1"
            alt="community helping"
            />
             </div>
            <div className="hp-info"> 
                <h2>
                    About us
                </h2>
                <p> The Smile Trust, Inc. is an International Nonprofit Organization that Fights
                     against homelessness and works toward fixing food insecurities.  
                     </p>
            </div>
            <div className="hp-img">
                <img 
                src="https://socialmediaweek.org/wp-content/blogs.dir/1/files/FB-Ask-Help-COVID.jpg"
                alt="Delivering boxes" />
                  </div>
            <div className="hp-info"> 
                <h2>
                    What we do
                </h2>
                <p> Since February 2014, The Smile Trust formerly known as (Make the Homeless Smile)
                     has served over 100,000 meals between Miami, FL and Atlanta, GA.</p>
            </div>
            <div className="hp-img">
                 image
                  </div>
            <div className="hp-info"> 
                <h2>
                    community emergency center
                </h2>
                <p> We have an obligation to ensure that the population we service feels welcomed 
                    and understands that a lack of
                     physical address does not negate their dignity as a human being. </p>
            </div>
        </div>
    )
}


export default Homepage;
