import React, { useState } from "react";
import "./Welcome.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import * as Icons from "react-icons/fa";

function Welcome() {
  const [toggle, setToggle] = useState(false);
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
        {!toggle && <SignIn handleToggle={setToggle} />}
        {toggle && <SignUp handleToggle={setToggle} />}
      </div>
    </>
  );
}

export default Welcome;
