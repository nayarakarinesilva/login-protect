import { useState } from 'react'

import './App.css'
import GlobalStyle from './global'
import RoutesApp from './routes/routes.jsx'

function App() {

  return (
    <>
     <RoutesApp />
     <GlobalStyle />
    </>
  )
}

export default App
