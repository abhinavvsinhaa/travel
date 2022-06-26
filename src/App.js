import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element = {<Hero/>}/>
        <Route exact path="/about" element = {<About/>}/>
        <Route exact path="/contact-us" element = {<ContactUs/>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
