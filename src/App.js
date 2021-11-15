import React from 'react'
import BookList from './components/Carusel'
import Carusel from './components/BookList'
import 'antd/dist/antd.css'
import { AppProvider } from './context'

function App() {
  return (
    <AppProvider>
      <BookList/>
      <Carusel/>
    </AppProvider>
  )
}


export default App
