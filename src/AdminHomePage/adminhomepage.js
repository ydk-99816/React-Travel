import React from 'react';
import {Link} from 'react-router-dom';
import Left from './../Left/left';
import {Layout,Menu,Icon} from 'antd';
import { Row, Col } from 'antd';

const { Header, Sider, Content } = Layout;

var AdminHomePageCss = require('./adminhomepage.css')
export default class AdminHomePage extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      username:window.localStorage.getItem("username")
    }
  }
  logout=e=>{
    window.localStorage.removeItem("username")
    window.localStorage.removeItem("token")
    this.setState({
      username:null
    })
  }
  componentDidMount () {
  }
    state = {
        collapsed :false,
    };
    toggle = () =>{
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render(){
      let userProfile=null;
      if (this.state.username!=null) {
        userProfile=
          <div>
            <Link to="/adminhomepage/adminprofile">{this.state.username}</Link>
            <button type="primary" onClick={this.logout} className={AdminHomePageCss.button}>登出</button>
          </div>
      }else{
        userProfile=<Link to="/adminhomepage/adminlogin">登录</Link>
      }
        return(
            <Layout className={AdminHomePageCss.layout}>
              <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
          
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Left/>
                <Menu.Item key="1">
                <Link to="/adminhomepage/adminregistration">
                  <Icon type="user" />
                  <span>注册情况</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link to="/adminhomepage/admincollection">
                  <Icon type="folder-open" />
                  <span>收藏数量</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="3">
                <Link to="/adminhomepage/admintraffic">
                  <Icon type="bar-chart" />
                  <span>访问量</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="4">
                <Link to="/adminhomepage/adminshuffling">
                  <Icon type="upload" />
                  <span>轮播图管理</span>
                </Link>
                </Menu.Item>
              </Menu>
              </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <div className={AdminHomePageCss.login}>
                  
                  <Row gutter={16}>
                    <Col span={6}>
                      <div>
                        <Icon
                          className="trigger"
                          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                          onClick={this.toggle}
                        />
                      </div>
                    </Col>
                    <Col span={6}>
                      <div></div>
                    </Col>
                    <Col span={6}>
                      <div></div>
                    </Col>
                    
                    <Col span={6}>
                      <div>{userProfile}</div>
                    </Col> 
                  </Row>
                </div>
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                  {this.props.children}
                </div>
              </Content>
            </Layout>
            </Layout>
        )
    }
}
