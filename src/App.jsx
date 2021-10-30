import React from "react";
import Navbarr from "./components/Navbar/navbarr";
import Footter from "./components/Footer/footter";
import './App.css';



class App extends React.Component {
    render() { 
        return (
        <div>
            <Navbarr />
            <iframe url="https://iust.ac.ir" 
                    width="100%"
                    height="1000px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
             />
            
            <Footter />
        </div>
        );
    }
}
 
export default App;