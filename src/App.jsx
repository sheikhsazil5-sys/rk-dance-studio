import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dance from "./pages/Dance";
import Zumba from "./pages/Zumba";
import Batches from "./pages/Batches";
import Registration from "./pages/Registration";
import Gallery from "./pages/Gallery";
import Timetable from "./pages/Timetable";
import Contact from "./pages/Contact";
import Attendance from "./pages/Attendance";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/zumba" element={<Zumba />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;