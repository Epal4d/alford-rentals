import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard.jsx'
import { PropertyForm } from './pages/propertyForm.jsx'
import { PropertyEdit } from './pages/propertyEdit.jsx'
import { NavBar } from './components/navBar.jsx'

function App() {
const location = useLocation()
 
const isLoggedIn = !!localStorage.getItem("current_user")
const showNavBar = isLoggedIn && location.pathname !=="/"


  return (
    <>
    {showNavBar ? <NavBar/> : null}
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="properties/create" element={<PropertyForm/>} />
          <Route path="/edit/:propertyId" element={<PropertyEdit/>} />
      </Routes>
    </>
  )
}

export default App
