import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import { About, Admin, Cart, Error404, Landing, Login, Product, Profile, Shop } from './pages'
import Layout from './layouts/Layout'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Landing/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='product/:id' element={<Product/>} />
        <Route path='about' element={<About/>} />
        <Route path='admin' element={<Admin/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='auth' element={<Login/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='*' element={<Error404/>} />
      </Route>
    </Routes>
  )
}

export default App
