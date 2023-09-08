import { useState } from "react";
import "./App.scss";
import { Navbar } from "./components/index";
import { Landing, About, Skills, Projects, Contact, Footer } from "./container";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const [activeCard, setActiveCard] = useState<string | null>("about");
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`App ${theme}`}>
      <div className="App__wrapper">
        <div className="App__left-side">
          <Landing theme={theme} />
          <Navbar setActiveCard={setActiveCard} />
        </div>

        <div className="App__right-side">
          <AnimatePresence mode="wait">
            {activeCard === "about" && (
              <motion.div key="about" className="card-motion-wrapper" variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                <About />
              </motion.div>
            )}
            {activeCard === "skills" && (
              <motion.div key="skills" className="card-motion-wrapper" variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                <Skills />
              </motion.div>
            )}
            {activeCard === "projects" && (
              <motion.div key="projects" className="card-motion-wrapper" variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                <Projects />
              </motion.div>
            )}
            {activeCard === "contact" && (
              <motion.div key="contact" className="card-motion-wrapper" variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Footer setTheme={setTheme} currentTheme={theme} />
      </div>
    </div>
  );
}

export default App;
