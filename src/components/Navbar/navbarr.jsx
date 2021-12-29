
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/image';
import axios from 'axios';
import './navbarr.css';



class Navbarr extends React.Component {
  constructor(props) {
    super(props);
    var data = JSON.parse(localStorage.getItem("info"));
    //this.setState({ guest: 0, name: data.name, token: data.token, prof_image: this.props.serverAddress+data.prof_image });
    if(data){
    this.state={
      name: data.name,
      username: data.username,
      darkmode: 0,
      guest: 0,
      lang: "fa",
      token: data.token,
      prof_image: this.props.serverAddress+data.prof_image,
      scrll:0,
    }}
    else{
      this.state={
        name: "مهمان",
        username: "st",
        darkmode: 0,
        guest: 1,
        lang: "fa",
        token: "g",
        prof_image: "",
        scrll:0,
      }
    }
  }
  /*
  state = {
    name: "مهمان",
    username: "st",
    darkmode: 0,
    guest: 1,
    lang: "fa",
    token: "g",
    prof_image: "",
  };*/

  /*               - Page Language 
  language_dic={
    "fa" : [],
    "en" : []

  };
  */

  /*                - Dark Mode Page View
  toggleDarkMode = () => {
     this.setState({darkmode : (this.state.darkmode+1)%2});
  };
  */


  handleLogout = () => {
    this.setState({ guest: 1, token: "Guest", prof_image: "/default_user_image.png" });
    localStorage.clear();
    window.location.replace("/");
    const ref = this;

    axios.post(this.props.serverAddress + "/api/logout", {
      headers: {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      },
      data: {
        Token: ref.state.token
      }
    })
      .then(function (response) {
        console.log(response.headers);
      })

      .catch(function (error) {
        console.log("error:" + error);
      });



  }


  handleLogin = () => {
    this.props.handleLogin();

  }

  handleRegister = () => {
    this.props.handleRegister();
  }



  toggleNavBar = (data) => {
    data = JSON.parse(localStorage.getItem("info"));
    this.setState({ guest: 0, name: data.name, token: data.token, prof_image: this.props.serverAddress+data.prof_image });
  }


  getProfImg = () => {
  if(this.state.prof_image){
  return <img  src={this.state.prof_image} width="30" height="30" className="profImage" />
  }
  
  return <svg height='30' width='30' className="profImage" style={{verticalAlign: 'middle'}}><circle cx='15' cy='15' r='50' stroke-width='3' fill='pink' /><text x='18' y='17' fill='rgba(255, 90, 169)'>{this.state.username[0]}</text></svg>
  
  }


  getNavBar = () => {
    if (this.state.guest) {
      return <div >
        <button className="mr-3 nav-btn" onClick={this.handleLogin} href="/registerads" variant="warning" >ورود</button>
        <button className="mr-3 nav-btn" onClick={this.handleRegister} href="/registerads" variant="warning" >ثبت نام</button>
      </div>
    }
    else {
      return <div>
      
      <button className="mr-3 mt-2 nav-btn" href="/registerads" variant="warning" >ثبت آگهی</button>
      
      </div>
    }
  }

  scrolled = (scrolled) =>{
    
    this.setState({scrll:scrolled/100})
  }

  render() {
    return (
      <Navbar style={{backgroundColor:"rgba(255,230,230,"+this.state.scrll+")"}} fixed="top" expand="lg" dir="ltr">
        <Container fluid>
          <Navbar.Brand className="navbar-homepage-ref" href="/" />
          
          <Navbar.Toggle style={{
                backgroundColor:'pink', borderWidth:'0'
              }}  
           aria-controls="navbarScroll" />



          <Navbar.Collapse id="navbarScroll">

            <Nav style={{ marginLeft: "auto" }} dir="rtl">
            <Nav
              
              hidden={this.state.guest}
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              
            >

              <NavDropdown dir="rtl" className="NavDropdownProf mr-4" title={
                <>
                {this.getProfImg()}
                
                </>
                
                
              } >

                <p style={{textAlign:"right", padding: "0 1.5rem"}}>{this.state.name}</p>
                <NavDropdown.Item className="navdropdown" href="/profile" >
                
                  <div class="nav-icons">
                    <a class="nav-icons-desc ml-2">مشاهده پروفایل</a>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown" onClick={()=>{this.props.onChat("0")}}>
                  <div class="nav-icons">
                    <a class="nav-icons-desc ml-2">مشاهده پیامها</a>
                  </div>
                </NavDropdown.Item>
                
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.handleLogout} className="navdropdown">
                  <div class="nav-icons">
                    <a class="nav-icons-desc ml-2">خروج</a>
                  </div>
                </NavDropdown.Item>

              </NavDropdown>

            </Nav>
              {this.getNavBar()}
            </Nav>

            
            

          </Navbar.Collapse>
          
        </Container>

        

      </Navbar>
    );
  }
}

export default Navbarr;