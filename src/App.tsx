import { Hero } from './components/Hero';
import { ContentSections } from './components/ContentSections';
import { Footer } from './components/Footer';
import { GamingPage } from './components/GamingPage';
import { StreamingPage } from './components/StreamingPage';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'gaming' | 'streaming'>('home');

  if (currentPage === 'gaming') {
    return <GamingPage onNavigateHome={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'streaming') {
    return <StreamingPage onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <ContentSections onNavigate={(page) => setCurrentPage(page)} />
      <Footer />
    </div>
  );
}