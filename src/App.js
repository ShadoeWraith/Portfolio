import { useState, useEffect } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import Nav from './components/Nav';
import DotNav from './components/DotNav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [categories] = useState([
    { name: 'About' },
    { name: 'Projects' },
    { name: 'Resume' },
    { name: 'Contact' },
  ]);

  const [currentCategory, setcurrentCategory] = useState(categories[0]);

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
          <Nav />
          <DotNav
            categories={categories}
            setcurrentCategory={setcurrentCategory}
            currentCategory={currentCategory}
          />
          <Home />
          <About />
          <Contact />
        </div>
      )}
    </div>
  );
}
