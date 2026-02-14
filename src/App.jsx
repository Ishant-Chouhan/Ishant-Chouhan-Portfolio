import { useEffect } from 'react';
import { CursorProvider } from './context/CursorContext';
import Layout from './components/layout/Layout';
import Hero from './components/layout/Hero';
import Projects from './components/layout/Projects';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import NeonCanvas from './components/ui/NeonCanvas';
import './App.css';

function App() {
  useEffect(() => {
    // Reset scroll position on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <CursorProvider>
      <div className="noise-overlay" />
      <NeonCanvas />
      <Layout>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </CursorProvider>
  );
}

export default App;
