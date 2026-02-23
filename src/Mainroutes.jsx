import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './components/serviceSection/Registration'
import Legal from './components/serviceSection/Legal'
import Other from './components/serviceSection/Other'
import Return from './components/serviceSection/Return'
import Accounting from './components/serviceSection/Accounting'
import BussinessSetup from './components/serviceSection/BussinessSetup'
import App from './App'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProcessPage from './pages/ProcessPage'
import WhyChooseUsPage from './pages/WhyChooseUsPage'
const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/process' element={<ProcessPage/>}/>
            <Route path='/why-us' element={<WhyChooseUsPage/>}/>
            <Route path='/services/registration' element={<Registration/>}/>
            <Route path='/services/legal' element={<Legal/>}/>
            <Route path='/services/others' element={<Other/>}/>
            <Route path='/services/return' element={<Return/>}/>
            <Route path='/services/accounting' element={<Accounting/>}/>
            <Route path='/services/business' element={<BussinessSetup/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes