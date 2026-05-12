import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './Home.css';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/solutions" element={<Navigate to="/" replace />} />
        <Route path="/pilot-program" element={<Navigate to="/" replace />} />
        <Route path="/impact" element={<Navigate to="/" replace />} />
        <Route path="/resources" element={<Navigate to="/" replace />} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
