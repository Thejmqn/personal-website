import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./tools/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Placeholder from "./pages/Placeholder.jsx";
import Notes from "./pages/Notes.jsx";
import { notes_list } from "./pages/Notes.jsx";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/projects" element={<Placeholder title="My Projects" />} />
          <Route path="/hobbies" element={<Placeholder title="Hobbies & Interests" />} />
          <Route path="/contact" element={<Placeholder title="Get in Touch" />} />
          {notes_list.map((note, i) => (<>
              <Route path={"/notes/" + i} element={note.element} />
              <Route path={"/notes/" + note.link} element={note.element} />
          </>))}
        </Routes>
      </div>
    </Router>
  );
}
