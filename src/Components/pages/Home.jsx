import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Accordian from "../Accordian/Accordian";
import HomeSecOne from "../HomeSecOne/HomeSecOne";
import HomeSecTwo from "../HomeSecTwo/HomeSecTwo";
import HomeSecThree from "../HomeSecThree/HomeSecThree";
import HomeSecFour from "../HomeSecFour/HomeSecFour"

function Home() {
  return (
    <div style={{ backgroundColor: "#404240" }}>
      <Banner />
      <HomeSecOne />
      <HomeSecTwo />
      <HomeSecThree />
      <HomeSecFour />
      <Accordian />
      <Footer />
    </div>
  );
}

export default Home;
