
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog_details from './Blog_details'
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'

const App=()=> {
  
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/:id' element={<Blog_details/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
