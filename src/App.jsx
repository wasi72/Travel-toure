import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import About from './pages/aboutPage';
import Gallery from './pages/gallery';
import ContectUs from './pages/contactUs';
import Hotels from './pages/hotels';
function App() {
  return (
    <>
      <BrowserRouter basename="/Travel-Tours">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="about_us" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContectUs />} />
          <Route path="hotel" element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
