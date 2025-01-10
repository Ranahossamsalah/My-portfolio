/** @format */

import React, { useState } from "react";
import "./card.css";
import "../cardDetails/cardDetails";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Main from "../../components/3-main/Main";
function Card(props) {
  const [title, settitle] = useState(props.title);
  const [programs, setprograms] = useState(props.programs);
  const [githubLink, setgithubLink] = useState(props.githubLink);
  const [websiteLink, setwebsiteLink] = useState(props.websiteLink);
  const [disc, setdisc] = useState(props.disc);
  const [img, setimg] = useState(props.img);
  return (
    <div>
      <div className="card flex">
        <img src={props.img} alt="" />
        <h3> {title}</h3>
        <p>
          {" "}
          {props.disc} <br />
          Programs used: {programs}
        </p>
        <div className="flex cardFooter">
          <div className="flex ">
            <button>
              {" "}
              <a target="_blank" href={websiteLink}>
                <div className="icon icon-link" />{" "}
              </a>
            </button>
            <button>
              {" "}
              <a target="_blank" href={githubLink}>
                {" "}
                <div className="icon icon-github" />{" "}
              </a>{" "}
            </button>
          </div>
          <NavLink
            className="flex"
            to="/carddetails"
            // reactrouter//////////////////////////////////////////////////////////////////////////////////
          >
            {" "}
            More{" "}
            <span
              style={{ alignSelf: "end" }}
              className="icon  icon-long-arrow-right"
            />{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
