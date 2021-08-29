import React from "react";
import "./Welcome.css";
import SignIn from "./SignIn";
import * as Icons from "react-icons/fa";

function Welcome() {
  return (
    <>
      <div className="container">
        <div className="product">
          <h2 className="title">
            <Icons.FaCartArrowDown /> SHOP EASY
          </h2>
          <p className="tagline">One Place For All Your Needs</p>
          <div className="linebreak"></div>
        </div>
        <SignIn />
      </div>
    </>
  );
}

export default Welcome;
