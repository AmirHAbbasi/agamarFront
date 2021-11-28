import React from "react";
import './FilterIcon.css'
import { Button, Radio } from 'antd';
import { DownloadOutlined, DollarCircleOutlined } from '@ant-design/icons';

const FilterIcon = () => {

    return(
            <div className="myDiv">
                <Button size="large" className="button" type="primary" shape="round" icon={<DollarCircleOutlined />}>فروشی </Button>
                <Button size="large" className="button" type="primary" shape="round" icon={<DownloadOutlined />}> اهدایی </Button>
                <Button size="large" className="button" type="primary" shape="round" icon={<DownloadOutlined />}> اجاره </Button>
            </div>
    )

}

export default FilterIcon;