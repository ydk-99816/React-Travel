import React from 'react';



var LeftCss = require('./left.css')
export default class Left extends React.Component{

    render(){
        return(
            <div className={LeftCss.left}>
                <div className={LeftCss.font1}>
                <img src={require('./img/travel.png')} />
                九川网
                </div>
                {/* <div>注册情况</div>
                <div>收藏数量</div>
                <div>访问量</div>
                <div>轮播图管理</div> */}
            </div>
        )
    }
}