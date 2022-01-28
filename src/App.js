import "./App.css";
import ProjectList from "./components/ProjectList";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useState(() => {
    setTheme("light");
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Navbar themeToggler={themeToggler} theme={theme} />
      <Hero theme={theme} />
      <ProjectList projects={projects} theme={theme} />
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Wood Wood",
    subTitle: "Did the audio for a world wide campaing for Wood Wood x Fila",
    iframe: "https://player.vimeo.com/video/507724132?h=20b1f98697",
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
    iframe:
      "https://player.vimeo.com/video/349417211?h=c8120feef5?byline=false",
  },
  {
    id: 4,
    title: "HelloWorld",
    subTitle: "Why Hello World?",
  },
];

export default App;
