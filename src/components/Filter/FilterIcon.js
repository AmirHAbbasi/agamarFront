

import React from "react";
import { ConfigProvider,Select } from 'antd';
import './FilterIcon.css'


const { Option } = Select;



const FilterIcon = ({onChange}) => {
  
  ConfigProvider.config({
    theme: {
      primaryColor: '#ff188c',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    }
  });

  const handleProvinceChange = value => {    
    onChange(value)
  };


  return (
    <>
      <Select defaultValue={"همه"} style={{ width: 120 ,marginTop:"15vh", color: 'var(--ant-primary-color)'}} onChange={handleProvinceChange}>      
          <Option key={5}>همه</Option>
          <Option key={0}>فروشی</Option>
          <Option key={1}>اجاره</Option>
          <Option key={2}>اهدایی</Option>
      </Select>
      
    </>
  );
};

export default FilterIcon;