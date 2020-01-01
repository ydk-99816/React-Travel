import React from 'react';
import './footerbot.css';
import {Input} from 'antd';
import { Menu } from 'antd';
import { Pagination } from 'antd';
import {Link} from 'react-router-dom';

const { Search } = Input;

var FooterbotCss=require('./footerbot.css');

export default class FooterPage extends React.Component{
    state = {
    current: 'mail',
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
    render(){
        return(
            <div className={FooterbotCss.frame}>
                <div className={FooterbotCss.sharetop}>
                    <h1>旅游游记</h1>
                </div>
                <div className={FooterbotCss.menubar}>
                    <div className={FooterbotCss.menubarp}>
                        目的地
                    </div>
                <div className={FooterbotCss.A}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="alipay">
            <a className={FooterbotCss.a} href="https://ant.design" width={40}>
              北京
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.b} href="https://ant.design" width={40}>
              上海
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.c} href="https://ant.design" width={40}>
              广州
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.d} href="https://ant.design" width={40}>
              深圳
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.e} href="https://ant.design" width={40}>
              成都
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.f} href="https://ant.design" width={40}>
              重庆
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.g} href="https://ant.design" width={40}>
              杭州
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.h} href="https://ant.design" width={40}>
              天津
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.i} href="https://ant.design" width={40}>
              香港
            </a>
            </Menu.Item>
            <Menu.Item key="alipay">
            <a className={FooterbotCss.j} href="https://ant.design" width={40}>
              澳门
            </a>
            </Menu.Item>
            <div className={FooterbotCss.search}>
            <Search placeholder="你想去的城市" onSearch={value => console.log(value)} enterButton />
            </div>
            </Menu>
            </div>
            </div>
            <div className={FooterbotCss.share}>
               <ul className={FooterbotCss.shareul}>
                <li className={FooterbotCss.shareli}>
                <div className={FooterbotCss.face}>
                <img src={require('../picture/21.jpg')}width={60} height={60} />
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" width={300}>
                <Menu.Item key="alipay">
                    <Link to="/homepage/share">
                    <h2>成都，一个美食爱好者首选的城市</h2>
                    </Link>
                 </Menu.Item>
                </Menu>
                   </div>
                   <div className={FooterbotCss.outline}>
                   <dl className={FooterbotCss.site}>
                       <dt>地点：成都</dt>
                   </dl>
                   <dl className={FooterbotCss.route}>
                       <dt>
                       行程：廖记棒棒鸡>春熙路>文殊坊>鲜知味钵钵鸡>宽窄巷子>老妈蹄花>
                       杜甫草堂>洞子口张老二凉粉>蛋烘糕>人民公园>天府广场>浣花溪公园
                       </dt>
                   </dl>
                   <ul className={FooterbotCss.prospectus}>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/22.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/23.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/24.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/25.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                   </ul>
                   </div>
                   </li>
               </ul>
               <ul className={FooterbotCss.shareul}>
                   <li className={FooterbotCss.shareli}>
                   <div className={FooterbotCss.face}>
                       <img src={require('../picture/21.jpg')}width={60} height={60} />
                       <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" width={300}>
                <Menu.Item key="alipay">
                    <Link to="/homepage/share">
                    <h2>成都，一个美食爱好者首选的城市</h2>
                    </Link>
                 </Menu.Item>
                </Menu>
                   </div>
                   <div className={FooterbotCss.outline}>
                   <dl className={FooterbotCss.site}>
                       <dt>地点：成都</dt>
                   </dl>
                   <dl className={FooterbotCss.route}>
                       <dt>
                       行程：廖记棒棒鸡>春熙路>文殊坊>鲜知味钵钵鸡>宽窄巷子>老妈蹄花>
                       杜甫草堂>洞子口张老二凉粉>蛋烘糕>人民公园>天府广场>浣花溪公园
                       </dt>
                   </dl>
                   <ul className={FooterbotCss.prospectus}>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/26.jpg')}
                           width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/27.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/28.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/29.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                   </ul>
                   </div>
                   </li>
               </ul>
               <ul className={FooterbotCss.shareul}>
                <li className={FooterbotCss.shareli}>
                <div className={FooterbotCss.face}>
                <img src={require('../picture/21.jpg')}width={60} height={60} />
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" width={300}>
                <Menu.Item key="alipay">
                    <Link to="/homepage/share">
                    <h2>成都，一个美食爱好者首选的城市</h2>
                    </Link>
                 </Menu.Item>
                </Menu>
                   </div>
                   <div className={FooterbotCss.outline}>
                   <dl className={FooterbotCss.site}>
                       <dt>地点：成都</dt>
                   </dl>
                   <dl className={FooterbotCss.route}>
                       <dt>
                       行程：廖记棒棒鸡>春熙路>文殊坊>鲜知味钵钵鸡>宽窄巷子>老妈蹄花>
                       杜甫草堂>洞子口张老二凉粉>蛋烘糕>人民公园>天府广场>浣花溪公园
                       </dt>
                   </dl>
                   <ul className={FooterbotCss.prospectus}>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/30.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/31.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/32.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                       <li className={FooterbotCss.prospectus1}>
                          <Link to="/homepage/share"><img src={require('../picture/33.jpg')} 
                          width={230} height={215}/></Link> 
                       </li>
                   </ul>
                   </div>
                   </li>
               </ul>
            </div>
            <div className={FooterbotCss.bot}>
            <Pagination defaultCurrent={6} total={500} />
            </div>
                </div>
        )
    }
}