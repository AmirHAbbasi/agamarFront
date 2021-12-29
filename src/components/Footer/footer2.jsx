import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footter.css';





class Footter extends React.Component {
    

    render() { 
        return (
            <Navbar expand="lg" dir="ltr" className="sticky-bottom footer">
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
                            <a href="rss" target="_blank" className="fa fa-rss"></a>
                    </div> 

                    <div style={{ marginLeft: "auto" }} className="actived">
                        <a  href="/about" target="_blank" className="footerlink" lang="fa">درباره ما </a>
                        <p dir="rtl" lang="fa">تمامی حقوق متعلق به گروه آگامار می باشد. </p> 
                    </div>
            
            </Navbar>
        );
    }
}
 
export default Footter;