/** @format */

import React from "react";
import "./hero.css";
function Hero() {
  return (
    <div className="heroSection" id="heroSection">
      <section>
        <div className="leftSection">
          <img src="/me.png" className="heroImg" />
          <h1 className="glow">Frontend Developer - React Developer</h1>
          <p>
            Hi , I am rana hossam salah ,a frontend developer based in KSA
            ,passionate in problem solving, working now as a freelancer and
            enhancing my skills searching for a fulltime frontend developer
            opportunity.{" "}
          </p>
          <div className=" flex icons">
            <div className="icon icon-linkedin" />
            <div className="icon icon-github" />
          </div>
        </div>

        <div className="rightSection">
          {/* animation fgbknfjgnbjfgbkgfd dfgknfdjngkdf dfgmk fnghkfgmb;df,bl */}
        </div>
      </section>
    </div>
  );
}

export default Hero;
