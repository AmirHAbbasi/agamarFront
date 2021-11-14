import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
// import pages
import Home from './pages/Home'
import Home from './pages/Viewprofile'
import Home from './pages/Inbox'
import Home from './pages/About'

function App() {
  return (
    <Router>
      <Navbar/>
      <SearchForm/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        <Route exact path = "/Viewprofile">
          <Viewprofile/>
        <Route exact path = "/Inbox">
          <Inbox/>
        <Route exact path = "/About">
          <About/>
        </Route>
      </Switch>
    </Router>
  )
}


export default App
