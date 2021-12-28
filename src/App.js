import React from 'react'

import Login from "./components/login/login";
import Profile from "./components/profile/profile";
import AddBook from "./components/AddBook/AddBook";
import SignUp from "./components/signUp/signUp";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookList from './components/BookList/BookList'
import Banner from './components/Banner/Banner'
import FilterIcon from './components/Filter/FilterIcon'
import { AppProvider } from './ReqBookList'
import Navbarr from './components/Navbar/navbarr'
import Footter from './components/Footer/footer2'
import Antdmodal from "./components/AdvancedSearch/antdmodal";




import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.serverAddress = 'http://127.0.0.1:8000';  // Hossein Rahimi, Mehrabi : change all requests
    this.navbar = React.createRef();
    this.LoginModal = React.createRef();    // Mehrabi
    this.regModal = React.createRef();     // Mehrabi
    this.bookCards = React.createRef();    // Hossein Rahimi
    this.categories = ["علمی", "داستانی", "درسی", "انگلیسی"]
  }




  showResult = (results) => {

    const bl = this.bookCards.current.props.children[0].props.children[3].props.children;
    console.log(bl);
    bl.showResults(results);
    // Show Results : Hossein Rahimi
    // results : backend response

  }

  handleRegister = () => {
    this.regModal.current.handleModalShowHide();
    // Show sign up modal   :   Mehrabi
    // this.setState({username: []  });       change this.state.username
    // this.submitLoginRegister(); at the end if login submitted, call this.submitLoginRegister function
  }
  handleLogin = () => {
    this.LoginModal.current.handleModalShowHide();

  }
  submitLoginRegister = (user_info) => {
    /*
    user_info = {
       username : "Amir_abbasi_77",
       name : "Amirhossein",
       lname :  "Abbasi",
    }
    */
    this.user_info = user_info;
    console.log(this.navbar)
    this.navbar.current.toggleNavBar(user_info);

  }

  submitt = () => {
    // this.LoginModal.current.handleModalShowHide();
  }
  render() {

    return (
      <Router>
        <Navbarr serverAddress={this.serverAddress} ref={this.navbar} handleRegister={this.handleRegister} handleLogin={this.handleLogin} />
        <br /><br /><br /><br />
        <Login dir="rtl" serverAddress={this.serverAdress} ref={this.LoginModal} onSubmit={(user_info) => { this.submitLoginRegister(user_info) }} />
        <SignUp dir="rtl" serverAddress={this.serverAdress} submit={this.submitt} ref={this.regModal} onSubmit={(user_info) => { this.submitLoginRegister(user_info) }} />

        <Switch ref={this.bookCards}>
          <Route exact path="/">
            <Banner />
            <Antdmodal serverAddress={this.serverAddress} onResult={(e) => { this.showResult(e) }} vis={false} categories={this.categories} />
            <FilterIcon />
            <AppProvider>
              <BookList serverAddress={this.serverAddress} ref={this.bookCards} />
            </AppProvider>
          </Route>
          <Route exact path="/profile">
            <Profile dir="rtl" />
          </Route>
          <Route exact path="/addbook">
            <AddBook dir="rtl" />
          </Route>
        </Switch>
        <br /><br /><br /><br />
        <Footter />
      </Router>

    );
  }
}


export default App;
