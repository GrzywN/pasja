import React from "react";
import Hero from "../components/Hero";
import About from "../components/About"
import Location from "../components/Location";
import Appointment from "../components/Appointment";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Location />
      <Appointment />
    </>
  );
}

export default HomePage;
