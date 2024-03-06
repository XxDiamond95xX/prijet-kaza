import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Location from './pages/Location'
// Importez les icônes que vous souhaitez utiliser
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Configurer Font Awesome pour utiliser les icônes que vous avez importées
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faChevronUp);


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/location/:id' element={<Location />} />
      </Routes>
    </>
  )
}

export default App
