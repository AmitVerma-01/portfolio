import "./App.css";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Navbar from "./pages/Navbar.tsx";
import Projects from "./pages/Projects.tsx";
import Skill from "./pages/Skill.tsx";
function App() {
  return (
    <>
      <Navbar className="rounded-full  bottom-2  md:mx-0 w-full backdrop-blur" />
      <Home />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
