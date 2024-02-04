import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navigation/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import items from './data';
import updateDocTheme from './darkmodelogic';

function App() {
  useEffect(() => {
    updateDocTheme();
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/projects' element={<Projects items={items} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home items={items.slice(0, 3)} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
