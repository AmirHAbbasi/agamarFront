import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);






// import React from 'react'
// import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.css';
// import App from './App';
// import Email from "./emailVerified";
// import Chat from "./components/chat/chat";
// import WebSocketInstance from './components/websocket';

// class Index extends React.Component {

//   componentDidMount() {
//     WebSocketInstance.connect();
//   }

//   render() {
//     return (
//       <App />
//     );
//   };
// }

// ReactDOM.render(
//   <Index />,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
