import "./App.css";
import { Routes, Route } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import About from "../components/About/";
import Home from "../components/Home/";
import FormContact from "../components/FormContact";
import MyPorjects from "../components/MyPorjects";
import Experiences from "../components/Experiences"
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/my-experience" element={<Experiences />} />
          <Route path="/my-projects" element={<MyPorjects />} />
          <Route path="/talk-me" element={<FormContact />} />
        </Routes>
    </div>
  );
}

export default App;
