import { useState, useEffect } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import DotNav from './components/DotNav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <GridLoader color="#2cacf4" loading={loading} size={15} />
        </div>
      ) : (
        <div>
          <DotNav />
          <Home />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </div>
      )}
    </div>
  );
}
