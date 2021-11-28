import React from "react";
import './FilterIcon.css'
import { Button, Radio } from 'antd';
import { DownloadOutlined, DollarCircleOutlined } from '@ant-design/icons';

const FilterIcon = () => {

    return(
        <section className="section22">
            <div className="myDiv">
                <Button className="button" type="primary" shape="round" icon={<DollarCircleOutlined />} />
                <Button className="button" type="primary" shape="round" icon={<DownloadOutlined />} />
                <Button className="button" type="primary" shape="round" icon={<DownloadOutlined />} />
            </div>
        </section>
    )

}

export default FilterIcon;