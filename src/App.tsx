// src/App.jsx
import Profile from "./components/Profile.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
    </div>
  );
}

export default App;
