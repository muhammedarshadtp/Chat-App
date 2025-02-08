import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/Signup'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <div className='p-4 h-screen justify-center flex items-center'>
      <Toaster position="top-right"
        reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </div>

  )
}

export default App
