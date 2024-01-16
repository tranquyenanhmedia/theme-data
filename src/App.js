import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import NotFound from './components/NotFound';
import FormData from './pages/FormData';
import BuinessPage from './pages/Buiness-page';
import Confirm from './pages/Confirm';
import UploadImages from './pages/UploadImages';
import FinalComponent from './components/Final';
import Waitting from './components/Waitting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/meta-community-standard' element={<FormData />} />
          <Route path='/meta-community-standard/buiness' element={<BuinessPage />} />
          <Route path='/meta-community-standard/confirm' element={<Confirm />} />
          <Route path='/meta-community-standard/waitting' element={<Waitting/>} />
          <Route path='/meta-community-standard/upload-image' element={<UploadImages />} />
          <Route path='/meta-community-standard/final' element={<FinalComponent />} />




          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;