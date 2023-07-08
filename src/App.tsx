import "./App.scss";
import { Navbar } from "./components/index";
import {
  Landing,
  Footer,
  About,
  Skills,
  Experience,
  Projects,
} from "./container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
