import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useRouters} from './routes'
import { useAuth } from './hooks/auth.hook'
import 'materialize-css'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'


function App() {
  const {token, login, logout, userId} = useAuth()
  const isAutheficated = !!token
  const routes = useRouters(isAutheficated) 
  
  return (
    <AuthContext.Provider value={{
      token,login, logout, userId, isAutheficated
    }}> 
      <Router>    
         <Navbar/>
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;

