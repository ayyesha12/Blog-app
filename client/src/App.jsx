import { useState } from 'react'
import {BrowserRouter,Routes,Route, Navigate, Outlet} from 'react-router-dom'
import Login from './components/account/login'
import DataProvider from './context/DataProvider'
import Header from './components/header/Header'
import Home from './components/home/home'
import CreatePost from './components/create/CreatePost'
 
const PrivateRoute=({isAuthenticated,...props})=>{
  return isAuthenticated ?
  <>
  <Header/>
  <Outlet/>
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
        
       <Route path='create' element={<CreatePost/>}/>
      </Route>

      </Routes>
      </div>
      </BrowserRouter>
     </DataProvider>
  );
}

export default App
