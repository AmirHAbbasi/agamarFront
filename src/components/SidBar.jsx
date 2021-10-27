import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


class SidBar extends React.Component {

    render() { 
        return (
            <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem icon={<img src="https://azouaoui-med.github.io/react-pro-sidebar/static/media/bg2.de0153c5.jpg" />}>Dashboard</MenuItem>
                        <SubMenu title="Components" icon={<img src="https://azouaoui-med.github.io/react-pro-sidebar/static/media/bg2.de0153c5.jpg" />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
            </ProSidebar>
        );
    }
}
 
export default SidBar;


