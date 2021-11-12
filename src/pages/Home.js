import React from 'react'
import 'antd/dist/antd.css'
import BookList from '../components/BookList'
import Carsel from '../components/carsel'
import FilterIcon from '../components/FilterIcon'

const Home = () => {
  return (
    <main>
      <Carsel/>
      <div className="Filter-icon">
        <FilterIcon/>
        <FilterIcon/>
        <FilterIcon/>
      </div>
      <BookList/>
    </main>
  )
}

export default Home
