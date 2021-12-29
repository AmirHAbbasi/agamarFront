import React from 'react';
import { ConfigProvider ,Tooltip, Slider} from 'antd';
import "./pricecss.css";

function formatter(value) {
  return `${value} تومان`;
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
      
        <Slider onChange={(e)=>{this.handleChange(e)}}
         tipFormatter={formatter} step={100} dir="rtl" range min={this.state.min_price} max={this.state.max_price} defaultValue={[this.state.min_price,this.state.max_price]} disabled={disabled}  />
                
      
    );
  }
}



export default PriceRanger;