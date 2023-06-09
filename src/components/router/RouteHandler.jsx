import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from '../login/Login'
import SignUp from '../signup/Signup'
import RegisterStudent from '../dataform/RegisterStudent'
import View from '../view/View'

const RouteHandler = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Sign-up' element={<SignUp/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register Student' element={<RegisterStudent/>}/>
        <Route path='View' element={<View/>}/>
      </Routes>
    </>
  )
}

export default RouteHandler