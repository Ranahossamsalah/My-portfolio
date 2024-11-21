/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/contact";
import Footer from "./components/5-footer/Footer";
import CardDetails from "./components/cardDetails/cardDetails";

// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="line" />
        <Hero />
        <div className="line" />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/carddetails" element={<CardDetails/>} />
        </Routes>
      
        <div className="line" />
        <Contact />
        <div className="line" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
