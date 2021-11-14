import React from 'react'
import 'antd/dist/antd.css'
import BookList from '../components/BookList'
import Carusel from '../components/Carusel'
import '../Home.css'

const Home = () => {
  return (
    <main>
      <Carusel/>
      <BookList/>
    </main>
  )
}

export default Home
