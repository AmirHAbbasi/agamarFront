import React from 'react';
import { AutoComplete } from 'antd';
import axios from 'axios';



class Complete extends React.Component {

  state = {
    options: []
  };




  updateAut = (text) => {

    if (text == "") {
      this.setState({ options: [] })
      return 0;
    }



    const ref = this;

    axios.get(this.props.serverAddress + "/api/book-find/" + text + "/")
      .then(function (response) {
        console.log(response)
        var ops = response.data.map(o => {
          return {
            value: o.title, label:
              (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    /*backgroundColor:"rgba(255, 90, 169,0.1)",*/
                    color: "rgb(255, 90, 169)"
                  }}
                >
                  <span dir="rtl" style={{
                    maxWidth: '50%',
                    textAlign: "left",
                  }} >
                    <a>
                      {o.author}
                    </a>
                  </span>
                  <span style={{ maxWidth: '50%', textAlign: "right" }}><a dir="rtl">{o.title}</a></span>
                </div>
              )
          }
        })
        ref.setState({ options: ops })
      })
      .catch(function (error) {
        console.log("error:" + error);
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


    return <>
      <AutoComplete dropdownClassName="autocompletedrpdwn"
        dir="rtl"
        options={this.state.options}
        style={{
          width: "70%", color: 'rgba(255, 90, 169)'
        }}
        backgroundColor="lightblue"
        onChange={(e) => { this.updateAut(e); this.props.onChange(e); }}

        placeholder="از میان بیش از 1 میلیون کتاب جستجو کنید!"

      >

      </AutoComplete>
    </>;
  }
}

export default Complete;