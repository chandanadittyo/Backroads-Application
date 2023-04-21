import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/NavBar/Navbar";
import Section from "./Components/Section/Section";
import Services from "./Components/Services/Services";
import Tours from "./Components/Tours/Tours";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Section></Section>
      <Services></Services>
      <Tours></Tours>
      <Footer></Footer>
    </div>
  );
}

export default App;
