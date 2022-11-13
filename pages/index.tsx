import React from "react";
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import About from "../components/About"
import Location from "../components/Location";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Meta />

      <main>
        <Hero />
        <About />
        <Location />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
