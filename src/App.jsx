import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard.jsx'
import { PropertyForm } from './pages/propertyForm.jsx'

function App() {
 

  return (
    
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="properties/create" element={<PropertyForm/>} />
      </Routes>
    
  )
}

export default App
