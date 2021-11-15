import React from "react";
import Navbarr from "./components/Navbar/navbarr";
import Footter from "./components/Footer/footter";
import Antdmodal from "./components/AdvancedSearch/antdmodal";
import Login from "./components/login";
import Profile from "./components/profileDashboard";
import SignUp from "./components/signUp";
import BookList from "./components/BookList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';



class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.serverAddress = 'http://127.0.0.1:8080/';  // Hossein Rahimi, Mehrabi : change all requests
        this.navbar = React.createRef();
        this.loginModal = React.createRef();    // Mehrabi
        this.regModal = React.createRef();     // Mehrabi
        this.bookCards = React.createRef();  
        this.profile = React.createRef();  
        this.categories = ["علمی","داستانی","درسی","انگلیسی"]
      }
    user_info = { 
           username : "Amir_abbasi_77",
           name : "اميرحسين",
           prof_image : "/usr/456456",
           access_token : "FLKDJFSL",
           refresh_token : "FLKDJFSL",
           email : "",
           phone_number : "",
           address : "",
           isBookStore : true,
           isPrivatePerson : false
          };

    
    showResult = (results) =>{      
        this.bookCards.current.showResults(results);
        // Show Results : Hossein Rahimi
        // results : backend response
        /*
        results = {
            {
                title : "صدای سایه",
                author : "محمد عبدی",
                book_image : "/book/456456",
                price : 2500
           },
           {
                title : "نوروز",
                author : "مسعود فیضی",
                book_image : "/book/455488",
                price : 30000
           },
           {
                title : "فیزیک پایه 2",
                author : "علیرضا جهانگیری",
                book_image : "/book/456422",
                price : 50000
           },
         }
        */
        
    }

    handleRegister = () =>{
        this.regModal.current.handleModalShowHide();
        // Show sign up modal   :   Mehrabi
        // this.setState({username: []  });       change this.state.username
        // this.submitLoginRegister(); at the end if login submitted, call this.submitLoginRegister function
    }
    handleLogin = () =>{
        this.loginModal.current.handleModalShowHide();
        // Show login modal     :   Mehrabi  
        // this.submitLoginRegister(data); at the end if login submitted, call this.submitLoginRegister function
        //your data must be like this :
        /*
        user_info = {
           username : "Amir_abbasi_77",
           name : "Amirhossein",
           prof_image : "/usr/456456",
           token : "FLKDJFSL"
        }
        */
    }
    submitLoginRegister = (user_info) => {
        /*
        user_info = {
           username : "Amir_abbasi_77",
           name : "اميرحسين",
           prof_image : "/usr/456456",
           token : "FLKDJFSL"
        }
        */
        this.user_info = user_info;
        this.navbar.current.toggleNavBar(this.user_info);
    }

    

    render() { 
        return (
                    <Router>
                      <Navbarr serverAddress={this.serverAddress} ref={this.navbar} handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
                      <Antdmodal serverAddress={this.serverAddress} onResult={(e) => {this.showResult(e)}}  vis={false} categories={this.categories}/> 
                      <SignUp serverAddress={this.serverAddress} ref={this.regModal} />
                      <Login serverAddress={this.serverAdress} ref={this.LoginModal} onSubmit={(user_info) =>{this.submitLoginRegister(user_info)}}/>
                      <Switch>
                        <Route exact path = "/">
                          <BookList serverAddress={this.serverAddress} ref={this.bookCards} />
                        <Route exact path = "/Viewprofile">
                          <Profile onEdit={(new_info)=>{this.submitLoginRegister(new_info)}} user_info={this.user_info} ref={this.profile}/>  
                        <Route exact path = "/Inbox">

                        <Route exact path = "/About">

                        </Route>
                      </Switch>
                    <Footter hidden />
                    </Router>


        );
    }
}  
 
export default App;
