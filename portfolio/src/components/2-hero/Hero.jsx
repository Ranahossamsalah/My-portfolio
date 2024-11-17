/** @format */

import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="heroSection"  >
      <section className="flex">
        <div className="leftSection" >
          <img src="/me.png" className="heroImg" />
          <h1>Frontend Developer - React Developer</h1>
          <p>Hi , I am rana hossam salah ,a frontend developer based in KSA ,passionate in problem solving, working now as a freelancer and enhancing my skills searching for a fulltime frontend developer opportunity. </p>
        </div>
        <div className="rightSection">animation</div>
      </section>
      <div className=" flex">
        <div  className="icon icon-linkedin"/>
        <div  className="icon icon-github"/>
      </div>
    </div>
  );
}

export default Hero;
