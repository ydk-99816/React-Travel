import React from 'react';
import BasicLayout from '../AdminHomePage/adminhomepage';
import { Link } from 'react-router-dom';

var AdminTrafficPageCss = require('./admintraffic.css');
export default class AdminTrafficPage extends React.Component{
    render(){
        return(
            <BasicLayout>
                <div className={AdminTrafficPageCss.page}>
                    <div className={AdminTrafficPageCss.box}>
                        这是访问量界面
                    </div>
                </div>
            </BasicLayout>
        
        
        )
    }
}