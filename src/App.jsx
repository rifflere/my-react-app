import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <h1>Profile</h1>
      <div className="profile">
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
