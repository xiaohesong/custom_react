import React from 'react'
import MyMenu from './Menu'
import MyContent from './Content'
import { Layout } from 'antd';
const {Sider} = Layout;


class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    }


    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed
        });
    }

    render() {
        console.log("main layout props is", this.props)
        return (
            <Layout style={{
                minHeight: '100vh'
            }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            >
            <div className="logo" />
            <MyMenu />
          </Sider>
          <MyContent>
            {this.props.children}
          </MyContent>
      </Layout>
        );
    }
}

export default SiderDemo