import React from "react";
import Clothes from "./images/Clothes.jpeg";
import EmptyHeart from "./images/EmptyHeart.png";
import FilledHeart from "./images/FilledHeart.png";
import Food from "./images/Food.jpeg";
import Hygiene from "./images/Hygiene.png";
import Love from "./images/Love.png";
import Page1 from "./images/Page1.png";
import NextButton from "./images/NextButton.png";

function Checkboxes() {
  return (
    <>
      <div className="page-counter"> {Page1}</div>
      <div>
        <div className="module-container" alt="fresh food">
          <p className="card-title">Fresh Food</p>
          <div className="card-image">
            <img src={FilledHeart} alt="filled heart" />
            <img src={Food} alt="food" />
          </div>
        </div>
        <div className="module-container" alt="Clothing and shoes">
          <p className="card-title">Clothing And Shoes</p>
          <div className="card-image">
            <img src={EmptyHeart} alt="empty heart" />
            <img src={Clothes} alt="clothes" />
          </div>
        </div>
        <div className="module-container" alt="Personal Hygiene">
          <p className="card-title">Personal Hygiene Products</p>
          <div className="card-image">
            <img src={EmptyHeart} alt="empty heart" />
            <img src={Hygiene} alt="hygiene" />
          </div>
        </div>
        <div className="module-container" alt="Love and Support">
          <p className="card-title">Love and Support</p>
          <div className="card-image">
            <img src={FilledHeart} alt="filled heart" />
            <img src={Love} alt="love and support" />
          </div>
        </div>

        <div>
          <a href="/Form">{NextButton}</a>
        </div>
      </div>
    </>
  );
}

export default Checkboxes;
