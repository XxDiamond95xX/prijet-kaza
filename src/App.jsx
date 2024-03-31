import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Location from './pages/Location';
import NotFound from './pages/NotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import '../src/globalStyle/App.css'


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
