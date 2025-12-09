import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ContentSections } from './components/ContentSections';
import { Footer } from './components/Footer';
import { GamingPage } from './components/GamingPage';
import { StreamingPage } from './components/StreamingPage';
import { ScrollToTop } from './components/ScrollToTop';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <ContentSections />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gaming" element={<GamingPage />} />
        <Route path="/streaming" element={<StreamingPage />} />
      </Routes>
    </>
  );
}