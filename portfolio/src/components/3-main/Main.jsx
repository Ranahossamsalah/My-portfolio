/** @format */

import React from "react";
import "./main.css";
function Main() {
  return (
    <div className="mainSection">
      <section className="flex">
        <div className="leftSection">
          <button className="btn active"> All Projects</button>
          <button className="btn"> React Projects</button>
          <button className="btn"> Angular Projects</button>
          <button className="btn"> Javascript Projects</button>
          <button className="btn"> Html & Css Projects</button>
        </div>
        <div className="rightSection">
          <div className="cards flex">
            <div className="card flex">
              <img src="./cardGame.png" alt="" />
              <h3> Cards Game</h3>
              <p> this is one of my projects using Html, CSS and javascript.</p>
              <div className="flex cardFooter">
                <div className="flex ">
                  <button>
                    {" "}
                    <a href="https://soft-dragon-e84452.netlify.app/">
                      <div className="icon icon-link" />{" "}
                    </a>
                  </button>
                  <button>
                    {" "}
                    <a
                        target="_blank"
                      href="https://github.com/Ranahossamsalah/cards-game?tab=readme-ov-file"
                    >
                      {" "}
                      <div className="icon icon-github" />{" "}
                    </a>{" "}
                  </button>
                </div>
                <a 
                className="flex"
                  target="_blank"
                  href="https://github.com/Ranahossamsalah/cards-game?tab=readme-ov-file"
                >
                  {" "}
                 More <span style={{alignSelf:"end"}} className="icon  icon-long-arrow-right" />{" "}
                </a>
              </div>
            </div>

            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
            <div className="card"> All Projects</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
