import React from 'react';
import { ConfigProvider, Slider} from 'antd';
import "./pricecss.css";

function formatter(value) {
  return `${value} تومان`;
}

/*



ConfigProvider.config({
  theme: {
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  }
});
*/

const theme = {
  primaryColor: '#189000',
  errorColor: '#ff4d4f',
  warningColor: '#faad14',
  successColor: '#52c41a',
  infoColor: '#1890ff',
}

class PriceRanger extends React.Component {
  state = {
    disabled: false,
    min_price:0,
    max_price:100000,
  };
  

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };
  handleChange = (event)=>{
    this.props.onChange(
    Math.min(event[0],event[1]),
    Math.max(event[0],event[1])
    )
    
  }

  render() {
    const { disabled } = this.state;
    return (
      
<ConfigProvider>
        <Slider onChange={(e)=>{this.handleChange(e)}}
         tipFormatter={formatter} step={100} dir="rtl" range min={this.state.min_price} max={this.state.max_price} defaultValue={[this.state.min_price,this.state.max_price]} disabled={disabled}  />
             
             </ConfigProvider>    
    );
  }
}



export default PriceRanger;