import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookList from './components/BookList'
import Carusel from './components/Carusel'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
            <Carusel/>
          <BookList/>
        </Route>
      </Switch>
    </Router>
  )
}


export default App
