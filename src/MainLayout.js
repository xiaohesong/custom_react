import React from 'react'
import MyMenu from './Menu'
import MyContent from './Content'
import {Layout} from 'antd';
const {Sider} = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed});
  }

  render() {
    return (<Layout style={{
        minHeight: '100vh'
      }}>
      <Sider collapsible="collapsible" collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo"/>
        <MyMenu/>
      </Sider>
      <MyContent>
        {this.props.children}
      </MyContent>
    </Layout>);
  }
}

export default SiderDemo
