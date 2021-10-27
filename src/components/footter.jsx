import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';


class Footter extends React.Component {
    
    render() { 
        return (
  <Navbar fixed="bottom" bg="dark" expand="lg" dir="rtl">
  <Container fluid>
    
   
    <Navbar.Collapse id="navbarScroll">
    <a href="/aboutus">درباره ی ما</a>
    <a href="/advancedsearch" style={{ marginRight: "auto" }}>جستجوی پیشرفته</a>  
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        );
    }
}
 
export default Footter;