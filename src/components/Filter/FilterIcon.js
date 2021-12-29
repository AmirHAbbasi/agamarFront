

import React from "react";
import { Select } from 'antd';
import './FilterIcon.css'

const { Option } = Select;



const FilterIcon = ({onChange}) => {
  
  

  const handleProvinceChange = value => {    
    onChange(value)
  };


  return (
    <>
      <Select defaultValue={"همه"} style={{ width: 120 ,marginTop:"15vh"}} onChange={handleProvinceChange}>      
          <Option key={5}>همه</Option>
          <Option key={0}>فروشی</Option>
          <Option key={1}>اجاره</Option>
          <Option key={2}>اهدایی</Option>
      </Select>
      
    </>
  );
};

export default FilterIcon;