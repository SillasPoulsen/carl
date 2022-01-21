import "./App.css";
import ProjectList from "./components/ProjectList";
//import HorizontalScroll from "react-scroll-horizontal";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <button>Hello</button>
      <ProjectList projects={projects} />
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "C a r l P h i l l i p",
    subTitle:
      "Audio genius and certified from the Danish Royal Acadamy of Music",
    iframe:
      "https://player.vimeo.com/video/349417211?h=c8120feef5?byline=false",
  },
  {
    id: 2,
    title: "JavaScript",
    subTitle:
      "Wha is functional programming? What is functional programming? v ",
    iframe: "https://player.vimeo.com/video/507724132?h=20b1f98697",
  },
  {
    id: 3,
    title: "JavaScript",
    subTitle: "What is v",
  },
  {
    id: 4,
    title: "HelloWorld",
    subTitle: "Why Hello World?",
  },
];

export default App;
