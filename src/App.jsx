import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbarr from "./components/Navbar/navbarr";
import Footter from "./components/Footer/footter";
import SearchForm from './components/SearchForm'
import Antdmodal from "./components/AdvancedSearch/antdmodal";
import Login from "./components/login";
import Profile from "./components/profileDashboard";
import SignUp from "./components/signUp";
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
        // Show Results : Hossein Rahimi
        // results : backend response
        /*
        results = [
    {
        "id": 3,
        "title": "زنده باد کارخانه (جستار عکس مستند اجتماعی 1)",
        "profile_image": "/profiles/zendebad.jpg",
        "author": "آیدین باقری محمد مالجو",
        "publisher": "اختران",
        "descripsion": "گروه کارخانجات نسترن چینی مصور کارخانه ها ایران قم",
        "created": "2021-11-13T12:16:04.740435Z",
        "buy": "2",
        "owner": 2,
        "price": null
    },
    {
        "id": 6,
        "title": "خودم با دیگران",
        "profile_image": "/profiles/khodam.webp",
        "author": "کارلوس فوئنتس",
        "publisher": "نشر ماهی",
        "descripsion": "داستان جهان",
        "created": "2021-11-13T12:21:11.466423Z",
        "buy": "0",
        "owner": 3,
        "price": "85000"
    },
    {
        "id": 8,
        "title": "زندگی اسرارآمیز شاهزاده خانم ها (تصویرگر ربه کا داترمر)",
        "profile_image": "/profiles/shahzadde.webp",
        "author": "فیلیپ لچرمایر",
        "publisher": "مبتکران",
        "descripsion": "شاهدخت ها",
        "created": "2021-11-13T12:23:58.757900Z",
        "buy": "2",
        "owner": 2,
        "price": null
    },
    {
        "id": 9,
        "title": "ستارگان بر مسیر خویش",
        "profile_image": "/profiles/setaregan.jpg",
        "author": "ایزاک آسیموف",
        "publisher": "علم",
        "descripsion": "علوم",
        "created": "2021-11-13T12:25:14.556827Z",
        "buy": "2",
        "owner": 3,
        "price": null
    }
]

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
                        <SearchForm/>
                        <Switch>
                            <Route exact path = "/">
                                <Home />
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
