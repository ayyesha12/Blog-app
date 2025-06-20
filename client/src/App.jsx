import { useState } from 'react'
import {BrowserRouter,Routes,Route, Navigate, Outlet} from 'react-router-dom'
import Login from './components/account/login'
import DataProvider from './context/DataProvider'
import Header from './components/header/Header'
import Home from './components/home/home'
import CreatePost from './components/create/CreatePost'
import DetailView from './components/details/DetailView'
import UpdatePost from './components/create/Update'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const PrivateRoute=({isAuthenticated,...props})=>{
  return isAuthenticated ?
  <>
  <Header/>
  <Outlet/>
    <Footer/>
  </>
  :<Navigate replace to='/login'/>
}
function App() {
  const [isAuthenticated,isUserAuthenticated]=useState(false)
 
  return (   
     <DataProvider>
      <BrowserRouter>
      
       <div style={{marginTop:"68px"}}>
      <Routes>
    <Route path='/login' element= {<Login isUserAuthenticated={isUserAuthenticated}/>}/>

     <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
       <Route path='/'element={<Home/>}/>
        <Route path='about'element={<About/>}/> 
          <Route path='contact'element={<Contact/>}/> 
       <Route path='create' element={<CreatePost/>}/>
       <Route path='details/:id' element={<DetailView/>}/>
         <Route path='/update/:id' element={<UpdatePost/>}/>
      </Route>

      </Routes>
      </div>
      </BrowserRouter>
     </DataProvider>
  );
}

export default App
