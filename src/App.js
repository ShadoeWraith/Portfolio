import { useState, useEffect } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import ProgressBar from './components/ProgressBar';
import DotNav from './components/DotNav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [categories] = useState([
    { name: 'home' },
    { name: 'about' },
    { name: 'projects' },
    { name: 'resume' },
    { name: 'contact' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
          <ProgressBar />
          <DotNav
            categories={categories}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <Home />
          <About />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}
