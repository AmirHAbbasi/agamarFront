import React, {ReactDOM, useState } from 'react';
import { AutoComplete } from 'antd';
import axios from 'axios';






const Complete = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    /*
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3), mockVal(searchText, 3)],
    );
    */
  };

  
  //const axios = require('axios');
  const onChange = (data) => {
    setValue(data);
    
    axios({
      method: 'post',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      url: 'http://localhost:8080/api/autocomplete',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
    /*
    axios.post('http://127.0.0.1:1000', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log("Resp:"+response);
    })
    .catch(function (error) {
      console.log("error:"+error);
    });
    */
  };

  return (
    <>
      <AutoComplete
        dir="rtl"
        options={options}
        style={{
          width: "100%",
        }}
        
        onSearch={onChange}
        placeholder="از میان بیش از 1 میلیون کتاب جستجو کنید!"
      />
    </>
  );
};


export default Complete;


//ReactDOM.render(<Complete />, document.getElementById('app'));