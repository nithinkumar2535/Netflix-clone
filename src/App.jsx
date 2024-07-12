import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import SectionThree from "./Components/SectionThree/SectionThree";
import SectionFour from "./Components/SectionFour/SectionFour";
import Accordian from "./Components/Accordian/Accordian";

function App() {
  const [count, setCount] = useState("");

  return (
    <div>
      <Banner/>
      <SectionOne/>
      <SectionTwo/>
      <SectionFour/>
      <SectionThree/>
      <Accordian/>
    </div>
  );
}

export default App;
