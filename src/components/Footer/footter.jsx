import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import './footter.css';


class Footter extends React.Component {
    
    render() { 
        return (
        <div dir="ltr" className="footer p-3">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          </link>
           
          <div className="socialmediacontainer ">
                <a href="http://facebook.com" target="_blank" className="fa fa-facebook"></a>
                <a href="http://twitter.com" target="_blank" className="fa fa-twitter"></a>
                <a href="http://google.com" target="_blank" className="fa fa-google"></a>
                <a href="http://linkedin.com" target="_blank" className="fa fa-linkedin"></a>
                <a href="http://youtube.com" target="_blank" className="fa fa-youtube"></a>
                <a href="http://instagram.com" target="_blank" className="fa fa-instagram"></a>
                <a href="http://play.google.com" target="_blank" className="fa fa-android"></a>
                <a href="#" target="_blank" className="fa fa-rss"></a>
           </div> 
           <div className="active">
            <a  href="/about" target="_blank" className="footerlink" lang="fa">درباره ما </a><br />
            <p dir="rtl" lang="fa" className="active">تمامی حقوق متعلق به گروه آگامار می باشد. </p> 
           </div>

        </div>
        );
    }
}
 
export default Footter;