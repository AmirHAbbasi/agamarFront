import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
// import pages
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Navbar/>
      <SearchForm/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}


export default App
