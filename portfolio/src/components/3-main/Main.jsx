/** @format */

import React from "react";
import "./main.css";
import Card from "../../components/card/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Main() {
  return (
    <div className="mainSection" id="mainSection">
      <section>
        <div className="leftSection">
          <button className="btn active"> All Projects</button>
          <button className="btn"> React Projects</button>
          <button className="btn"> Angular Projects</button>
          <button className="btn"> Javascript Projects</button>
          <button className="btn"> Html & Css Projects</button>
        </div>
        <div className="rightSection">
          <div className="cards flex">
        
              <Card
                title="Cards Game"
                programs="Html ,CSS ,javascript"
                githubLink="https://github.com/Ranahossamsalah/cards-game?tab=readme-ov-file"
                websiteLink="https://soft-dragon-e84452.netlify.app/"
                disc="This is a simple card Game"
                img="./cardGame.png"
              />
        
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
