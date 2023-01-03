import { useState, useCallback, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {

  const [y, setY] = useState(window.scrollY);
  const [effect, setEffect] = useState('');

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY ) {
        setEffect('fade-in');
      } else if (y < window.scrollY && window.scrollY >= 200 ) {
        setEffect('fade-out');
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);


  return (
    <div className="background gradient">
        <div className="container  px-2 py-2" id="outer-container">
                <div id="page-wrap ">
                  <Header animation={effect} />
                  <Profile />
                  <AboutMe />
                  <Works />
                  <Contact />
                </div>

        </div>
      </div>
  );
}

export default App;

