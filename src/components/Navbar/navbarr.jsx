import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ReactTooltip from 'react-tooltip';
import './navbarr.css';


class Navbarr extends React.Component {
    state = {
      name : "مهمان",
      username : "Guest",
      darkmode:0,
      //prof_img_src:"https://www.w3schools.com/howto/img_avatar.png",
      guest:1,
      lang:"fa"
    };

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
      this.setState({guest : 1});
      console.log("handleLogout");
      /*
      /api/logout
      Header => Method: post , Token: Refresh
      */
    }


    handleLogin = () => {
      this.props.handleLogin();
    }

    handleRegister = () => {
      this.props.handleRegister();
    }


    
    toggleNavBar = (data)=> {
      this.setState({guest:0, name:data.name+" "+data.lname});
    }
    


    getNavBar = () => {
      if(this.state.guest){
        return <div >
                    <Button className="ml-1"  onClick={this.handleLogin} variant="outline-success">ورود</Button>
                    <Button className="ml-1" onClick={this.handleRegister}  variant="outline-success">ثبت نام</Button>
                </div>
      }
      else{
        return <Button href="/registerads"  variant="outline-warning">ثبت آگهی</Button>
      }
    } 

    render() { 
        return (
  <Navbar sticky="top" bg="light" expand="lg" dir="ltr">
  <Container fluid>
    <Navbar.Brand href="/homepage">Agamar</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        hidden={this.state.guest}
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <NavDropdown  className="NavDropdownProf" title={
          <div dir="rtl" style={{display:'inline'}}>
          <svg className="ml-1" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path>
          </svg>
          <a>{this.state.name}</a>
          </div>
          } id="navbarScrollingDropdown" >
          
          
          <NavDropdown.Item className="navdropdown" href="/viewprofile">مشاهده پروفایل</NavDropdown.Item>
          <NavDropdown.Item className="navdropdown" href="/inbox">پیام ها</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={this.handleLogout} className="navdropdown">
          <a>خروج</a>
          </NavDropdown.Item>
          
        </NavDropdown>
        
        </Nav>

        
      
      <Nav style={{ marginLeft: "auto" }} dir="rtl">
         {this.getNavBar()}
         
      </Nav>
      
      
    </Navbar.Collapse>
  </Container>
  
</Navbar>
        );
    }
}
 
export default Navbarr;