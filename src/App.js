import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import LanguageSwitcher from "./components/LanguageSwitcher";
import SocialNetwork from "./components/SocialNetwork";
import ContactMe from "./components/ContactMe";
import AboutUs from "./components/AboutUs";
import Reservation from "./components/Reservation";
import "./components/LanguageSwitcher.css";
import SignIn from "./pages/SignIn";
import "./App.css";
import RoomDetails from "./pages/RoomDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <h2> WELCOME to our Hotel Platform! Have A Nice Stay! </h2>
      <LanguageSwitcher className="language-switcher" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/rooms/:id" component={<RoomDetails/>} />
        </Routes>
        <SocialNetwork />
        <ContactMe />
      </div>
    </Router>
  );
}

export default App;
