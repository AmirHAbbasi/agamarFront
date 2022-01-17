import React from 'react';
import { Input, AutoComplete } from 'antd';
import axios from 'axios';



class Complete extends React.Component {
  constructor(props) {
    super(props);
    this.ac = React.createRef();
  }
  state = {
    options : []
  };

  

  
  updateAut = (text) => {
    
    if(text==""){this.setState({options:[]})
                return 0;
                }

    

    const ref = this;
    
    axios.get(this.props.serverAddress+"/api/book-find/"+text+"/")
    .then(function (response) {
      console.log(response)
      var ops = response.data.map(o=>{return {value:o.title, label:
        (
          <div
          id="ds"
          dir="rtl"
            style={{
              display: 'flex',              
              /*backgroundColor:"rgba(255, 90, 169,0.1)",*/
              color:"rgb(255, 90, 169)",
              textAlign:"right"
            }}
          >
            
            <a dir="rtl">{o.title}</a>
          </div>
        )
      }})
      ref.setState({options:ops})
    })
    .catch(function (error) {
      console.log("error:"+error);
    });

    /*
    axios.post(this.props.serverAddress+"api/autocomplete", {
      headers:{
               'Access-Control-Allow-Origin':'http://127.0.0.1:3000',
               'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept',
               'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
              },
      data:text,
      
    })
    .then(function (response) {
      var ops = response.data.map(o=>{return {value:o}})
      ref.setState({options:ops})
    })

    .catch(function (error) {
      console.log("error:"+error);
    });
    */

  };

  render() { 
    
  
    return  <>
            <AutoComplete dropdownClassName="autocompletedrpdwn"
            
              dir="rtl"
              options={this.state.options}
              style={{
                width: "50%", color:'rgba(255, 90, 169)'
              }} 
              
              backgroundColor= "lightblue"
              onChange={(e) => {this.updateAut(e);this.props.onChange(e);}}
              enterButton
              
            >
              
              <Input.Search            
              style={{
                color:'rgba(255, 90, 169)'
              }} 
              onSearch={()=>{this.props.onSearch()}}
              
               size="large" placeholder="از میان بیش از 1 میلیون کتاب جستجو کنید!" 
               enterButton
               
               />

            </AutoComplete>
</>
          ;
  }
}
 
export default Complete;