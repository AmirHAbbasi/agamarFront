import React from "react";
import './FilterIcon.css'
import { Button, /*Radio*/ } from 'antd';

const FilterIcon = () => {

    return(
        <div className="myDiv">
            <Button size="large" className="button" type="primary" shape="round">همه</Button>
            <Button size="large" className="button" type="primary" shape="round">فروشی </Button>
            <Button size="large" className="button" type="primary" shape="round">اجاره</Button>
            <Button size="large" className="button" type="primary" shape="round">اهدایی</Button>
        </div>
    )

}

export default FilterIcon;