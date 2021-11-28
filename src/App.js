import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookList from './components/BookList/BookList'
import Banner from './components/Banner/Banner'
import { AppProvider } from './ReqBookList'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Banner/>
          <AppProvider> 
            <BookList/>
          </AppProvider>
        </Route>
      </Switch>
    </Router>
  )
}


export default App
