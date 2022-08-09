import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/layaout/About';
import Contact from './components/layaout/Contact';
import Hombre from './components/layaout/Hombre';
import Home from './components/layaout/Home';
import Mujer from './components/layaout/Mujer';
import NavbarHO from './components/Navbar/NavbarHO';
import Ninos from './components/layaout/Ninos';

function App() {
  return (
    <>
        <BrowserRouter >
          <NavbarHO />
          <Routes>
            <Route index element={ <Home /> } />
            <Route path='hombre' element={ <Hombre /> } />
            <Route path='mujer' element={ <Mujer /> } />
            <Route path='nino' element={ <Ninos /> } />
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='*' element={ <Navigate replace to='/' /> } />
          </Routes>
        </BrowserRouter>
    </>
      
    
  );
}

export default App;
