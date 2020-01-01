
import React from 'react';
import './homepage.css';
import Header from './../Header/header';
import Slideshow from './../Bady/Slideshow/slideshow';
import Publicity from './../Bady/Publicity/publicity';
import Footerbot from './../Footer/Footerbot/footerbot';
import { Layout,Row,Col } from 'antd';
import {Link} from 'react-router-dom';

const {Sider, Content,Footer } = Layout;
var HomePageCss =require('./homepage.css')
export default class HomePage extends React.Component{
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className={HomePageCss.layout}>
    <Layout>
    <Layout className={HomePageCss.header}>
      <Header></Header>
      </Layout>
      <div className={HomePageCss.bady}>
      <Layout>
        <div className={HomePageCss.badyleft}>
        <Content>
          <Slideshow/>
        </Content>
        </div>
        <div className={HomePageCss.badyright}>
          <Content>
            <Publicity/>
          </Content>
        <Sider width={290} style={{ background: '#fff' }}></Sider>
        </div>
      </Layout>
      </div>
      <div className={HomePageCss.footer}>
      <Layout>
      <div className={HomePageCss.footertop}>
      <Footer>
        <div className={HomePageCss.top}>
          <div className={HomePageCss.topA}>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={8}>
        <div className={HomePageCss.topA1}>
        <Link to="/homepage/share"><img src={require('./imgs/11.jpg')} width={445} height={200} /></Link>
          <p>雪山</p>
        </div>
      </Col>
      <Col span={8}>
      <div className={HomePageCss.topA1}>
      <Link to="/homepage/share"><img src={require('./imgs/12.jpg')} width={445} height={200} /></Link>
      <p>秋天的童话</p>
      </div>
      </Col>
      <Col span={8}>
      <div className={HomePageCss.topA1}>
      <Link to="/homepage/share"><img src={require('./imgs/13 .jpg')} width={445} height={200} /></Link>
      <p>感受大海的澎湃</p>
      </div>
      </Col>
    </Row>
    </div>
    <div className={HomePageCss.topB}>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={8}>
        <div className={HomePageCss.topB1}>
        <Link to="/homepage/share"><img src={require('./imgs/14.jpg')} width={445} height={200} /></Link>
          <p>河南鲁山-尧山风景</p>
        </div>
      </Col>
      <Col span={8}>
      <div className={HomePageCss.topB1}>
      <Link to="/homepage/share"><img src={require('./imgs/15.jpg')} width={445} height={200} /></Link>
      <p>古龙峡玻璃观景台</p>
      </div>
      </Col>
      <Col span={8}>
      <div className={HomePageCss.topB1}>
      <Link to="/homepage/share"><img src={require('./imgs/16.jpg')} width={445} height={200} /></Link>
      <p>黄山风景如画</p>
      </div>
      </Col>
    </Row>
    </div>
        </div>
      </Footer>
      </div>
      <div className={HomePageCss.footerbot}>
      <Footer>
        <Footerbot/>
      </Footer>
      </div>
    </Layout>
    </div>
    </Layout>
    </div>
    );
  }
}
