import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./tools/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Notes from "./pages/Notes.jsx";
import notes_list from "./notes/notes_list.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import Work from "./pages/Work.jsx";
import Misc from "./pages/Misc.jsx";
import work_list from "./work/work_list.jsx";
import misc_list from "./misc/misc_list.jsx";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/work" element={<Work />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/contact" element={<Contact darkMode={isDarkMode}/>} />
          {notes_list.map((note, i) => (<>
              <Route path={"/notes/" + i} element={note.element} />
              <Route path={"/notes/" + note.link} element={note.element} />
          </>))}
          <Route path="/notes/latest" element={notes_list[notes_list.length-1].element} />
          {work_list.map(work => 
              <Route path={"/work/" + work.link} element={work.element} />
          )}
          {misc_list.map(misc => 
              <Route path={"/misc/" + misc.link} element={misc.element} />
          )}
        </Routes>
      </div>
    </Router>
  );
}
