

import React from "react";
import { Select } from 'antd';
import './FilterIcon.css'

const { Option } = Select;



const FilterIcon = () => {
  
  

  const handleProvinceChange = value => {
    
  };


  return (
    <>
      <Select defaultValue={"همه"} style={{ width: 120 ,marginTop:"15vh"}} onChange={handleProvinceChange}>      
          <Option key={0}>همه</Option>
          <Option key={1}>فروشی</Option>
          <Option key={2}>اجاره</Option>
          <Option key={3}>اهدایی</Option>
      </Select>
      
    </>
  );
};

export default FilterIcon;