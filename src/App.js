import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from "./components/Team";
import Contact from "./components/Contact";
import MagazineCard from './components/MagazineCard';
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <MagazineCard/>
      <Team/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
