import React from "react";
import Navbarr from "./components/Navbar/navbarr";
import Footter from "./components/Footer/footter";
import Antdmodal from "./components/AdvancedSearch/antdmodal";
import login from "./components/login";
import profileDashboard from "./components/profileDashboard";
import signUp from "./components/signUp";
import './App.css';



class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.serverAddress = 'http://127.0.0.1:8080/';  // Hossein Rahimi, Mehrabi : change all requests
        this.navbar = React.createRef();
        this.loginModal = React.createRef();    // Mehrabi
        this.regModal = React.createRef();     // Mehrabi
        this.bookCards = React.createRef();    
        this.categories = ["علمی","داستانی","درسی","انگلیسی"]
      }

    


    showResult = (results) =>{        
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
        // Show sign up modal   :   Mehrabi
        // this.setState({username: []  });       change this.state.username
        // this.submitLoginRegister(); at the end if login submitted, call this.submitLoginRegister function
    }
    handleLogin = () =>{
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
           name : "Amirhossein",
           prof_image : "/usr/456456",
           token : "FLKDJFSL"
        }
        */
        this.navbar.current.toggleNavBar(user_info);
    }

    

    render() { 
        return (
        <div>
            <Navbarr serverAddress={this.serverAddress} ref={this.navbar} handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
            <Antdmodal serverAddress={this.serverAddress} onResult={(e) => {this.showResult(e)}}  vis={false} categories={this.categories}
            /> 
                
            <signUp serverAddress={this.serverAddress} ref={this.regModal} onSubmit={(user_info) =>{this.submitLoginRegister(user_info)}}/>
            
            <BookList serverAddress={this.serverAddress} ref={this.bookCards} />

            <Footter hidden />
        </div>
        );
    }
}
 
export default App;
