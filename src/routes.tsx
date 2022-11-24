import { useState } from 'react'
import { BrowserRouter, Route, Routes as ListRoutes } from 'react-router-dom'

import Item from './components/Item/index'
import Home from './pages/Home'
function Routes() {
  return (
      <BrowserRouter >
        <ListRoutes>
            <Route element={<Home />} path='/' />
        </ListRoutes>
      </BrowserRouter>
  )
}

export default Routes