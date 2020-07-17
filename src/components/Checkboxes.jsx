import React from "react";
import Clothes from "./images/Clothes.jpeg";
import EmptyHeart from "./images/EmptyHeart.png";
import FilledHeart from "./images/FilledHeart.png";
import Food from "./images/Food.jpeg";
import Hygiene from "./images/Hygiene.png";
import Love from "./images/Love.png";
import Page1 from "./images/Page1.png";
import NextButton from "./images/NextButton.png";
import "../App.css";

function Checkboxes() {
  return (
    <>
      <div className="page-counter">
        {" "}
        <img src={Page1} alt="page one" />
      </div>
      <h2>What can we help you with?</h2>
      <div>
        <div className="module-container" alt="fresh food">
          <p className="card-title">Fresh Food</p>
          <div className="image-container">
            <img className="heart-image" src={FilledHeart} alt="filled heart" />
            <img className="card-image" src={Food} alt="food" />
          </div>
        </div>
        <div className="module-container" alt="Clothing and shoes">
          <p className="card-title">Clothing And Shoes</p>
          <div className="image-container">
            <img className="heart-image" src={EmptyHeart} alt="empty heart" />
            <img className="card-image" src={Clothes} alt="clothes" />
          </div>
        </div>
        <div className="module-container" alt="Personal Hygiene">
          <p className="card-title">Personal Hygiene Products</p>
          <div className="image-container">
            <img className="heart-image" src={EmptyHeart} alt="empty heart" />
            <img className="card-image" src={Hygiene} alt="hygiene" />
          </div>
        </div>
        <div className="module-container" alt="Love and Support">
          <p className="card-title">Love and Support</p>
          <div className="image-container">
            <img className="heart-image" src={FilledHeart} alt="filled heart" />
            <img className="card-image" src={Love} alt="love and support" />
          </div>
        </div>

        <div>
          <a href="/AssistanceForm">
            <img className="next-button" src={NextButton} alt="next button" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Checkboxes;
