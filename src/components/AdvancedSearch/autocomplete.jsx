import React, {ReactDOM, useState } from 'react';
import { AutoComplete } from 'antd';
import axios from 'axios';



class Complete extends React.Component {

  state = {
     
    options : [
      { value: 'light'},
      { value: 'bambool'},
    ]
  };

  
  updateAut = (text) => {
    
    axios.post('http://127.0.0.1:8080/api/autocomplete')
    .then(function (response) {
      console.log("Resp:"+response);
    })
    ;

    /*
    axios.post('http://127.0.0.1:8080/api/autocomplete', {
      headers:{"Access-Control-Allow-Origin":"http://localhost:3000",
               'Access-Control-Allow-Credentials' : 'true'
              },
      data:text,
      
    })
    
    .catch(function (error) {
      console.log("error:"+error);
    });
    */
  };

  render() { 
    
  
    return <>
            <AutoComplete
              dir="rtl"
              options={this.state.options}
              style={{
                width: "100%",
              }}  
              onChange={(e) => {this.updateAut(e);this.props.onChange(e);}}
              
              placeholder="از میان بیش از 1 میلیون کتاب جستجو کنید!"
            />
          </>;
  }
}
 
export default Complete;