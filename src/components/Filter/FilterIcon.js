

import { React, createRef} from "react";
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
    onChange(value.target.value)
  };


  return (
    <>
    {/*
      <Select defaultValue={"همه"} style={{ width: 120 ,marginTop:"15vh", color: 'var(--ant-primary-color)'}} onChange={handleProvinceChange}>      
          <Option key={5}>همه</Option>
          <Option key={0}>فروشی</Option>
          <Option key={1}>اجاره</Option>
          <Option key={2}>اهدایی</Option>
      </Select>
    */}    
      <select defaultValue={"همه"} style={{ width: 120 ,marginTop:"15vh", color: 'black', backgroundColor:"pink", cursor:"pointer"}} onChange={handleProvinceChange}
      className="pt-1 pb-1 pr-1 pl-1"
      >
        <option key={5} value={5}>همه</option>
        <option key={0} value={0}>فروشی</option>
        <option key={1} value={1}>اجاره</option>
        <option key={2} value={2}>اهدایی</option>
      </select>
      
    </>
  );
};

export default FilterIcon;