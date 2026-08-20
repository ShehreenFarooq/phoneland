import { Routes, Route } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Repair from './components/Repair'
import RepairForm from './components/RepairForm'
import ContactForm from './components/ContactForm'
import AdminLogin from './components/adminlogin'
import AdminDashboard from './components/AdminDashboard'
import Devices from './components/Devices'
function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
    <Navbar/>
    <Body/>
    <Cards/>
    </>
      }/>
    <Route path='/repair-request' element={
<RepairForm/>
    }/>
    <Route path='/contact-request' element={
<ContactForm/>
    }/>
    <Route path='/repair2-request' element={
<Repair/>
    }/>
    <Route path="/admin/login" element={<AdminLogin/>} />

    <Route path="/admin/dashboard" element={<AdminDashboard/>} />
    <Route path="/devices-request" element={<Devices/>} />
    </Routes>
  )
}

export default App
