
import './App.css'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {


  return (
   
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
   
  )
}

export default App
