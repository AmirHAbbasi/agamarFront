import React from 'react';
import { DatePicker, Space, ConfigProvider } from 'antd';
import moment from 'moment';
//import zhCN from 'antd/lib/locale/zh_CN';
//import "./MyDatePicker.css"





const { RangePicker } = DatePicker;




class MyDatePicker extends React.Component {

  onChange=(dates, dateStrings)=> {
    this.props.onChange(dateStrings[0], dateStrings[1])  
  }

render(){
return <ConfigProvider direction="rtl" color="pink"><>
                               
                <RangePicker               
                color="pink"
                dropdownClassName="antd-picker-dropdown-rtlzzzzzzzzz"            
                format="YYYY-MM-DD"
                onChange={this.onChange}
                placeholder={["از","تا"]}
                disabledDate={(current)=> {
                  let newDate = new Date()                                          
                  return current > moment(newDate, "Mon Nov 29 2021 22:24:22 GMT+0330");
                }}
                />
                {/*<DatePicker onChange={onChange} />*/}
                
        </></ConfigProvider>
}

}
    

 

export default MyDatePicker;