import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import FeedbackFooter from './components/FeedbackFooter/FeedbackFooter';
import { useEffect, useState } from 'react';
import Modal from './components/Modal/Modal';
import Footer from './components/FeedbackFooter/Footer/Footer';
import HeroFooter from './components/Hero-Footer/HeroFooter';
import ContactUsFooter from './components/ContactUs-Footer/ContactUsFooter';
const App = () => {
  const [isModal , setisModal] = useState(false);
  const [isDesktop , setisDesktop] = useState(window.innerWidth > 1450);
  const updateMedia = () => {
    setisDesktop(window.innerWidth > 1450);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      <Router>
      <Navbar isDesktop = {isDesktop}/>
        <Routes>
        <Route exact path="/" element = {<Hero/>}/>
        <Route exact path="/about" element = {<About/>}/>
        <Route exact path="/contact-us" element = {<ContactUs/>}/>
        </Routes>
        <FeedbackFooter isModal={isModal} setisModal={setisModal}/>
        <Routes>
        <Route exact path="/" element = {<HeroFooter/>}/>
        <Route exact path="/contact-us" element = {<ContactUsFooter/>}/>
        </Routes>
        <Footer isModal={isModal} setisModal={setisModal}/>
        </Router>
        {
          isModal?
          <Modal setisModal={setisModal}/>
          : ''
        }
    </>
  );
}

export default App;
