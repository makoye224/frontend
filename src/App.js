import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import About from './components/About'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import SocialMedia from './SocialMedia'

function App() {
  return (
    <>
     
      <Router>
       
        <div className='container-fluid' style={{backgroundColor: "#212529"}}>
          <NavBar />
          </div>
          <div>
          <Routes>
          <Route path='/register' element={<Register />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/socialmedia' element={<SocialMedia/>} />
          </Routes>
          </div>
      </Router>
     
      <ToastContainer />
    
    </>
  )
}

export default App
