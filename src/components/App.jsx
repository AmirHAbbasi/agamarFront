import React from "react";
import SidBar from './SidBar';
import Navbarr from "./navbarr";
import Footter from "./footter";



class App extends React.Component {
    render() { 
        return (
        <div>
            <Footter />
            <iframe url="https://iust.ac.ir" 
                    width="100%"
                    height="1000px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
             />
            <Navbarr />
        </div>
        );
    }
}
 
export default App;