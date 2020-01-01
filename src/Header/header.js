import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/timg.jpg';
var HeaderCss = require('./header.css')
export default class HeaderPage extends React.Component{
    render(){
        return(
            <div className={HeaderCss.header}>
                <div className={HeaderCss.headerlogo}>
                    <Link><img alt=" " src={logo} height="70px" width="80px"></img></Link>
                </div>
                <p>知者乐水，仁者乐山。----九川网</p>
                <div className={HeaderCss.headermenu}>
                    <ul>
                        <li>
                        <span>请</span>
                            <Link to="/homepage/login" >登录</Link>
                        </li>
                        <li>
                            <span>或</span>
                            <Link to="/homepage/register">免费注册</Link>
                        </li>  
                        <li>
                        <span>|</span>
                            <Link to="/homepage/favorite">我的收藏</Link>
                            </li>
                        <li>
                        <span>|</span>
                            <Link to="/homepage/footprint">我的足迹</Link>
                            </li>
                    </ul>
                </div>
                </div>
        )
    }
}