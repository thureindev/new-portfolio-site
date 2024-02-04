import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import items from './data';

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    !localStorage.getItem('theme') || localStorage.getItem('theme') === 'dark'
  );

  console.log(localStorage.getItem('theme'));
  console.log('isDarkMode: ', isDarkMode);

  // This useEffect hook will run once when the component mounts
  useEffect(() => {
    if (
      isDarkMode ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Get the current location
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    setIsSideNavOpen(false); // Close the navigation when the location changes
  }, [location]);

  return (
    <>
      <Navbar
        location_path={location.pathname} // Pass the current path as a prop
        open={isSideNavOpen}
        setOpen={setIsSideNavOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <Routes>
        <Route
          path='/'
          element={<Home items={items.slice(0, 3)} isDarkMode={isDarkMode} />}
        />
        <Route
          path='/projects'
          element={<Projects items={items} isDarkMode={isDarkMode} />}
        />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
