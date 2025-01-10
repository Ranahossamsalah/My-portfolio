/** @format */

import React, { useEffect, useState } from "react";
import "./main.css";
import Card from "../../components/card/card";
import { BrowserRouter, Routes, Route, Await } from "react-router-dom";
import data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { addProjectId } from "../../components/redux/slices/projectIdSlice";
import projectIdSlice from "../redux/slices/projectIdSlice";
import favoritesSlice from "../redux/slices/favoritesSlice";

function Main() {
  const [projectId, setprojectId] = useState([]);
  // @ts-ignore
  const projectIdState = useSelector((state) => state.projectIdSlice.projectId);
  // @ts-ignore
  const favoritesState = useSelector((state) => state.favoritesSlice.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProjectId(projectId));
  }, [projectId]);

  const AllProjects = () => {
    setprojectId([]);
    data.map((data, i) => {
      setprojectId((oldArray) => [...oldArray, data.projectId]);
    });
  };

  const ReactProjects = () => {
    setprojectId([]);
    data.map((data, i) => {
      if (
        data.programs === "bootstrap, React.js" ||
        data.programs === "CSS ,React.js"
      ) {
        setprojectId((oldArray) => [...oldArray, data.projectId]);
      }
    });
  };

  const AngularProjects = () => {
    console.log(data);
  };

  const JavascriptProjects = () => {
    setprojectId([]);
    data.map((data, i) => {
      if (data.programs === "Html , CSS , Javascript") {
        setprojectId((oldArray) => [...oldArray, data.projectId]);
      }
    });
  };
  const HtmlCssProjects = () => {
    console.log(data);
  };
  return (
    <div className="mainSection" id="mainSection">
      <section>
        <div className="leftSection">
          <button onClick={AllProjects} className="btn active">
            {" "}
            All Projects
          </button>
          <button onClick={ReactProjects} className="btn">
            {" "}
            React Projects
          </button>
          <button onClick={AngularProjects} className="btn">
            {" "}
            Angular Projects
          </button>
          <button onClick={JavascriptProjects} className="btn">
            {" "}
            Javascript Projects
          </button>
          <button onClick={HtmlCssProjects} className="btn">
            Html & Css Projects
          </button>
        </div>
        <div className="rightSection">
          <div className="cards flex">
            {data.map((data, i) =>
            
              projectIdState.map((id, i) =>
                id === data.projectId ? (
                  <Card
                    key={i}
                    title={data.title}
                    programs={data.programs}
                    githubLink={data.githubLink}
                    websiteLink={data.websiteLink}
                    disc={data.disc}
                    img={data.img}
                  />
                ) : (
                  ""
                )
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
