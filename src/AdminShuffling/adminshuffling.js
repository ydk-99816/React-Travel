import React from 'react';
import BasicLayout from '../AdminHomePage/adminhomepage';
import { Link } from 'react-router-dom';

var AdminShufflingPageCss = require('./adminshuffling.css');
export default class AdminShufflingPage extends React.Component{
    render(){
        return(
            <BasicLayout>
                <div className={AdminShufflingPageCss.page}>
                    <div className={AdminShufflingPageCss.box}>
                        这是轮播图管理界面界面
                    </div>
                </div>
            </BasicLayout>
        
        
        )
    }
}