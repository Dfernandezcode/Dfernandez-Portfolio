import { useState } from "react";
import "./App.scss";
import { Navbar, MouseFollower } from "./components/index";
import { Landing, Footer, About, Skills, Projects, Contact } from "./container";

function App() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  return (
    <div className="App">
      <div className="App__wrapper">
        <div className="App__left-side">
          <Landing />
          <Navbar setActiveCard={setActiveCard} />
        </div>
        <div className="App__right-side">
          {activeCard === "about" && <About />}
          {activeCard === "skills" && <Skills />}
          {activeCard === "projects" && <Projects />}
          {activeCard === "contact" && <Contact />}
        </div>
        <Footer />
      </div>

      <MouseFollower />
    </div>
  );
}

export default App;
