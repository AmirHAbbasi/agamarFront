import React from "react";

import Navbarr from "./components/Navbar/navbarr";
import Footter from "./components/Footer/footer2";
import Antdmodal from "./components/AdvancedSearch/antdmodal";

import './App.css';



class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.serverAddress = 'http://127.0.0.1:8000/';  // Hossein Rahimi, Mehrabi : change all requests
        this.navbar = React.createRef();
        this.loginModal = React.createRef();    // Mehrabi
        this.regModal = React.createRef();     // Mehrabi
        this.bookCards = React.createRef();    // Hossein Rahimi
        this.categories = ["علمی","داستانی","درسی","انگلیسی"]
      }

    


    showResult = (results) =>{        
        // Show Results : Hossein Rahimi
        // results : backend response
        
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
           lname :  "Abbasi",
        }
        */
    }
    submitLoginRegister = (user_info) => {
        /*
        user_info = {
           username : "Amir_abbasi_77",
           name : "Amirhossein",
           lname :  "Abbasi",
        }
        */
        this.navbar.current.toggleNavBar(user_info);
    }

    

    render() { 
        return (
        <div>
            <Navbarr serverAddress={this.serverAddress} ref={this.navbar} handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
            
            <Antdmodal  serverAddress={this.serverAddress} onResult={(e) => {this.showResult(e)}}  vis={false} categories={this.categories}
            /> 

            <iframe style={{width:"10px", height:"1999px"}} />


            <Footter />
        </div>
        );
    }
}
 
export default App;