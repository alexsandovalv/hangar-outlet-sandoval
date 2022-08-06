import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hombre from './components/Hombre';
import Home from './components/Home';
import Mujer from './components/Mujer';
import NavbarHO from './components/NavbarHO';
import Ninos from './components/Ninos';

function App() {
  return (
    <>
        <BrowserRouter >
          <NavbarHO />
          <Routes>
            <Route index element={ <Home /> } />
            <Route path='hombre' element={ <Hombre /> } />
            <Route path='mujer' element={ <Mujer /> } />
            <Route path='ninos' element={ <Ninos /> } />
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='*' element={ <Navigate replace to='/' /> } />
          </Routes>
        </BrowserRouter>
    </>
      
    
  );
}

export default App;
