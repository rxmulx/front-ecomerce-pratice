import { useState } from 'react'
import { BrowserRouter, Route, Routes as ListRoutes } from 'react-router-dom'
import MyContext from './components/context/Mycontext'
import Home from './pages/Home'

function Routes() {
  const [productCart, setProductCart] = useState([])
  return (
      <BrowserRouter >
        <MyContext.Provider value={{productCart, setProductCart}}>
          <ListRoutes>
              <Route element={<Home />} path='/' />
          </ListRoutes>
        </MyContext.Provider>
      </BrowserRouter>
  )
}

export default Routes