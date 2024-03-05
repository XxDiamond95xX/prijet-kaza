import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Location from './pages/Location'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= {<Homepage />} />
      <Route path='/about' element= {<About />} />
      <Route path='/location/:id' element= {<Location />} />
    </Routes>
    </>
  )
}

export default App
