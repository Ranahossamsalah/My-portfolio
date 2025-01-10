/** @format */

import React, { useState } from "react";
import "./contact.css";

function Contact() {

  const [email, setemail] = useState("");
  const [massege, setmassege] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //to empty the elemnts of the form after submit
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";

    console.log(e.target.elements);
  };
  const handleEmailInput = (e) => {
    setemail(e.target.value);
  };
  const handleMassegeInput = (e) => {
    setmassege(e.target.value);
  };
  return (
    <div className="contactMe" id="contactMe">
      <h2 className="flex">
        Contact Me <div className="icon-envelope-o" />{" "}
      </h2>
      <p>
        {" "}
        Contact me if you want to me to help you do your frontend project using
        React or if you want to ask me ny question ^_^
      </p>
      <div className=" contactMeBox">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" onChange={handleEmailInput} />
          <br />
          <div className=" textArea">
            <label htmlFor="massege">Massege:</label>
            <textarea id="massege" onChange={handleMassegeInput}></textarea>
          </div>
          <label htmlFor="submit"></label>
          <input id="submit" type="submit"></input>
          <p className="success" >your massege has been sent successfully</p>
        </form>
        <div className="animation">animation</div>
      </div>
    </div>
  );
}

export default Contact;
