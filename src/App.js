import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookList from './components/BookList/BookList'
import Banner from './components/Banner/Banner'
import FilterIcon from './components/Filter/FilterIcon'
import { AppProvider } from './ReqBookList'
import Navbarr from './components/Navbar/navbarr'
import Footter from './components/Footer/footer2'
import './App.css'

function App() {
  return (
    <Router>
      <Navbarr/>
      <Switch>
        <Route exact path = "/">
          <Banner/>
          <FilterIcon/>
          <AppProvider> 
            <BookList/>
          </AppProvider>
        </Route>
      </Switch>
      <Footter/>
    </Router>
  )
}


export default App
