import { useState } from "react";
import "./App.scss";
import { Navbar, MouseFollower } from "./components/index";
import { Landing, Footer, About, Skills, Projects, Contact } from "./container";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween", // Using tween for a more controlled animation
        duration: 0.5,
        ease: "easeInOut", // easeInOut for smoother start and finish
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="App">
      <div className="App__wrapper">
        <div className="App__left-side">
          <Landing />
          <Navbar setActiveCard={setActiveCard} />
        </div>
        <div className="App__right-side">
          <AnimatePresence>
            {activeCard === "about" && (
              <motion.div
                key="about"
                className="card-motion-wrapper"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <About />
              </motion.div>
            )}
            {activeCard === "skills" && (
              <motion.div
                key="skills"
                className="card-motion-wrapper"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Skills />
              </motion.div>
            )}
            {activeCard === "projects" && (
              <motion.div
                key="projects"
                className="card-motion-wrapper"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Projects />
              </motion.div>
            )}
            {activeCard === "contact" && (
              <motion.div
                key="contact"
                className="card-motion-wrapper"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Footer />
      </div>

      <MouseFollower />
    </div>
  );
}

export default App;
