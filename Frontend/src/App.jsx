import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/authContext'

function App() {

    const {authUser}=useAuthContext();

  return (
    <div className='p-4 h-screen justify-center flex items-center'>
      <Toaster position="top-right"
        reverseOrder={false} />
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to={"/login"}/>} />
        <Route path='/login' element={authUser ? <Navigate to="/"/> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/'/> : <Signup /> } />
      </Routes>

    </div>

  )
}

export default App
