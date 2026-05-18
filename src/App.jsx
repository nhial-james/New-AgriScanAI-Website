import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './Home.css';
import Home from './pages/Home';
import About from './pages/About';
import PilotProgram from './pages/PilotProgram';
import Solutions from './pages/Solutions';
import Events from './pages/Events';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pilot-program" element={<PilotProgram />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
