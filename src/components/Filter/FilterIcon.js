import React from "react";
import './FilterIcon.css'
import { Button, /*Radio*/ } from 'antd';

const FilterIcon = () => {

    return (
        <div className="myDiv">
            <Button size="large" className="button" type="primary" style={{ borderRadius: "5px" }}>همه</Button>
            {' '}
            <Button size="large" className="button" type="primary" style={{ borderRadius: "5px" }}>فروشی </Button>
            {' '}
            <Button size="large" className="button" type="primary" style={{ borderRadius: "5px" }}>اجاره</Button>
            {' '}
            <Button size="large" className="button" type="primary" style={{ borderRadius: "5px" }}>اهدایی</Button>
        </div>
    )

}

export default FilterIcon;