import "./App.scss";
import { Navbar, MouseFollower } from "./components/index";
import { Landing, Footer, About, Skills, Projects } from "./container";

function App() {
  return (
    <div className="App">
      <Landing />

      <MouseFollower />
      <Navbar />

      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
