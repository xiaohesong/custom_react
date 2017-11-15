import React from 'react'
import { Layout, Breadcrumb } from 'antd';

const {Header, Content, Footer} = Layout;

class MyContent extends React.Component {
    render() {
        console.log("content props is", this.props)
        return (
            <Layout>
            <Header style={{
                background: '#fff',
                padding: 0
            }} />
            <Content style={{
                margin: '0 16px'
            }}>
              <div>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{
                textAlign: 'center'
            }}>
              Ant Design UI
            </Footer>
          </Layout>
        )
    }
}

export default MyContent