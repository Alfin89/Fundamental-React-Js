import './App.css'
import { useState } from 'react'
import Home from './pages/index'
import { GlobalContext } from './context/Context'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routers'

function App(props) {
  const user = {
    username : "Alfin Kamil",
  };

  return (
    <>
      <div>
        <GlobalContext.Provider value={user}>
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  )
}

export default App
