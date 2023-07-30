import "./App.scss";
import { Navbar } from "./components/index";
import { Landing, Footer, About, Skills, Projects } from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
