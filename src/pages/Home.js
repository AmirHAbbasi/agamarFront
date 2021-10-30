import React from 'react'
import BookList from '../components/BookList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <BookList/>
    </main>
  )
}

export default Home
