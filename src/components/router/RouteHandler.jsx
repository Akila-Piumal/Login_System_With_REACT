import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from '../login/Login'
import SignUp from '../signup/Signup'

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Sign-up' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default RouteHandler