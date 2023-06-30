import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import About from './components/About'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import SocialMedia from './SocialMedia'
import { QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient()


function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
       
        <div className='container-fluid' style={{backgroundColor: "#212529"}}>
          <NavBar />
          </div>
          <div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/socialmedia' element={<SocialMedia/>} />
          </Routes>
          </div>
      </Router>
     
      <ToastContainer />
     
      <ReactQueryDevtools initialIsOpen = {false} position ='bottom-right' />
      </QueryClientProvider>
    </>
  )
}

export default App
