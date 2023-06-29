
import './App.css';
import Home from "./components/home";
import Contact from './components/contact';
import About from './components/about';
import Service from './components/service';
import {Route , Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
          
      
      
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/service" element={<Service />} />
      </Routes>
      
    </div>
  );
}

export default App;
