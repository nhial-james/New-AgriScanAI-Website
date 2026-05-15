import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './Home.css';
import Home from './pages/Home';
import About from './pages/About';
import PilotProgram from './pages/PilotProgram';
import Solutions from './pages/Solutions';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pilot-program" element={<PilotProgram />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/impact" element={<Navigate to="/" replace />} />
        <Route path="/resources" element={<Navigate to="/" replace />} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
