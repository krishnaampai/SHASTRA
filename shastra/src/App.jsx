import './App.css'
import NavBar from './components/NavBar'
import { Route,Routes} from 'react-router-dom'
import Home from './routes/Home'
import Events from './routes/Events'
import Schedule from './routes/Schedule'
import Competitions from './routes/Competitions'
import Contact from './routes/Contact'
function App() {

  return (
    <>
     <div className='min-h-screen flex flex-col bg-gray-50'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/competitions" element={<Competitions/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
     </div>
    </>
  )
}

export default App
