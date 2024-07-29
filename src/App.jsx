
import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Allpage from './pages/Allpage'
import Navbar from './components/Navbar'
import Singelcatagorydetails from './pages/Singelcatagorydetails';
import Singeldynamicdetails from './pages/singeldynamicdetails';


export default function App() {
  return (
   <>
  
   <Router>
   <Navbar/>
    <Routes>
    <Route exact path='/' element={<Allpage/>}/>
    <Route exact path='/catagory/:title/:id' element={<Singelcatagorydetails/>} />
    <Route exact path='/catagory/product/:title/:id' element={<Singeldynamicdetails/>} />


   </Routes>
   </Router>

   </>
    
  )
}
