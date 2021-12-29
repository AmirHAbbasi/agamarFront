import React from 'react'

import Login from "./components/login/login";
import Profile from "./components/profile/profile";
import SignUp from "./components/signUp/signUp";
//import {SearchResult} from "./components/searchresults/searchresults"
import { SolutionOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookList from './components/BookList/BookList'
import Banner from './components/Banner/Banner'
import FilterIcon from './components/Filter/FilterIcon'
import { AppProvider } from './ReqBookList'
import Navbarr from './components/Navbar/navbarr'
import Footter from './components/Footer/footer2'
import Antdmodal from "./components/AdvancedSearch/antdmodal";
import emailVerified from "./components/emailVerified/emailVerified";





import './App.css'

class App extends React.Component {
    
  constructor(props) {
      super(props);
      this.serverAddress = 'http://127.0.0.1:8000';  // Hossein Rahimi, Mehrabi : change all requests
      this.navbar = React.createRef();
      this.LoginModal = React.createRef();    // Mehrabi
      this.regModal = React.createRef();     // Mehrabi
      this.bookCards = React.createRef();    // Hossein Rahimi
      this.searchresultviewer = React.createRef();
      this.alaki = React.createRef();
      this.chatComponent = React.createRef();
      this.categories = ["علمی","داستانی","درسی","انگلیسی"]
    }

  state = {
    results : [],
  results_reload:false
  }


  showResult = (results) =>{ 
    
    this.setState({results_reload:true})
    this.setState({results:results})   
    
    this.alaki.current.scrollIntoView({ behavior: 'smooth' })
    
    //const bl = this.bookCards.current.props.children[0].props.children[3].props.children;
    //console.log(bl);
    //bl.showResults(results);
      // Show Results : Hossein Rahimi
      // results : backend response
      
  }

  handleRegister = () =>{
    this.regModal.current.handleModalShowHide();
      // Show sign up modal   :   Mehrabi
      // this.setState({username: []  });       change this.state.username
      // this.submitLoginRegister(); at the end if login submitted, call this.submitLoginRegister function
  }
  handleLogin = () =>{    
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
       
      this.navbar.current.toggleNavBar(user_info);
      
  }

  submitt = () =>{
    this.LoginModal.current.handleModalShowHide();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  OpenChatWith = (username)=>{    
    this.chatComponent.current.OpenChatWith(username)
  }
    
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    //const height =
    //  document.documentElement.scrollHeight -
    //  document.documentElement.clientHeight
  
    //const scrolled = winScroll / height
    this.navbar.current.scrolled(winScroll)
    
    
    
  }



  render() { 

  return (  
            <Router>
              <Navbarr serverAddress={this.serverAddress} ref={this.navbar} handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
              
              <Login serverAddress={this.serverAdress} ref={this.LoginModal} onSubmit={(user_info) =>{this.submitLoginRegister(user_info)}} />
              <SignUp submit={this.submitt} ref={this.regModal} />
              
              <Switch ref={this.bookCards}>
                <Route exact path = "/">
                  <Banner onResult={(e) => {this.showResult(e)}} serverAddress={this.serverAddress} onResult={(e) => {this.showResult(e)}}  vis={false} categories={this.categories} />
                  {/*<Antdmodal  serverAddress={this.serverAddress} onResult={(e) => {this.showResult(e)}}  vis={false} categories={this.categories} />*/}
                  {/*
                  <SearchResult >
                  <BookList serverAddress={this.serverAddress} ref={this.bookCards}/>
                  </ SearchResult>
                  */}
                  <div ref={this.alaki}></div>
                  <FilterIcon/>                  
                  <AppProvider ref={this.searchresultviewer}> 
                  <BookList onChat={(username)=>{this.OpenChatWith(username)}} serverAddress={this.serverAddress} ref={this.bookCards} results={this.state.results} reload={this.state.results_reload}/>
                  </AppProvider>
                  
                </Route>
                <Route exact path = "/profile">
                  <Profile dir="rtl" />
                </Route>
                <Route exact path = "/email-verified">
                  <emailVerified />
                </Route>
                <Route exact path = "/search">                  
                  {/*<SearchResult  />     */}             
                </Route>
                <Route exact path = "/about">
                  انجام شده:
                  <li> بک گراند ایمیج ها گرفته شوند</li>
                  <li> فوتر فیت شود</li>
                  <li> اندازه ی سرچ فیلد کوچک شود</li>
                  <li> بک گراند ایمیج ها گرفته شوند</li>
                  <li> سایز فونت بو ک کارد ها کوچک شود</li>
                  <li> اسلاید شو فاصله چپ و راستش هماهنگ شود</li>
                  <li> تکست فیلد بیاد تو اسلاید شو</li>
                  <li> نام کاربر بیاد تو دراپ داون</li>

                  <hr></hr>


                  کارهای انجام نشده :
                  <li> دیزاین دکمه ها هماهنگ شود</li>
                  <li> دکمه ثبت آگهی بزرگه</li>
                  <li> اسکرولبار اتوکامپلیت بزرگه</li>
                  <li> مودال سرچ پیشرفته ولیدیتور میخواد</li>
                  <li> دیزاین دکمه ها لبه هاشون تیزه</li>
                  <li> سلکتور دراپ داون بجای فیلتر نمایش نتایج کتابها</li>

                  مودال سرچ فیلتر:
                  <li> باینپوت ها فیلدشون هماهنگ شود</li>
                  <li> انتخاب دسته بندی سلکتور شود</li>
                  <li> دکمه تاید کوچکتر شود</li>
                  <li> رنگ جیغ نذار برای بکگراندش</li>

                </Route>
              </Switch>
              <br /><br /><br /><br />
              <Footter/>
              {/*<SolutionOutlined style={{position:"fixed",right:"5%",bottom:"5%",width:"50vw", zIndex:"500000000000"}} />*/}
            </Router>
            
  );}
}


export default App;
