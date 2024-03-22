import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Location from './pages/Location';
import NotFound from './pages/NotFound';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import '../src/globalStyle/App.css'

library.add(faChevronUp);
library.add(faChevronRight);
library.add(faChevronLeft);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/location/:id' element={<Location />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
