import React from 'react'
import {Layout, Breadcrumb} from 'antd';

const {Header, Content, Footer} = Layout;

class MyContent extends React.Component {
  render() {
    return (<Layout>
      <Header style={{
          textAlign: 'center',
          backgroundColor: '#ecf6fd'
        }}>
        It's My Header
      </Header>
      <Content style={{marginTop: 0}}>
        <div>
          {this.props.children}
        </div>
      </Content>
      <Footer style={{
          textAlign: 'center'
        }}>
        Ant Design UI
      </Footer>
    </Layout>)
  }
}

export default MyContent
