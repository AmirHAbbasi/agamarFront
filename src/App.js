import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookList from './components/BookList/BookList'
import Banner from './components/Banner/Banner'
import FilterIcon from './components/Filter/FilterIcon'
import { AppProvider } from './ReqBookList'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Banner/>
          <FilterIcon/>
          <AppProvider> 
            <BookList/>
          </AppProvider>
        </Route>
      </Switch>
    </Router>
  )
}


export default App
