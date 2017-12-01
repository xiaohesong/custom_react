import React from 'react'
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
import "./stylesheets/css/Menu.css"

class MyMenu extends React.Component {
  render() {
    return (<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="pie-chart"/>
        <Link to="/">
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="desktop"/>
        <Link to="/users">
          <span>用户</span>
        </Link>
      </Menu.Item>
      <SubMenu key="sub1" title={<span> < Icon type = "user" />< span > User</span></span>}>
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title={<span> < Icon type = "team" />< span > Team</span></span>}>
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9">
        <Icon type="file"/>
        <span>File</span>
      </Menu.Item>
    </Menu>)
  }
}

export default MyMenu
