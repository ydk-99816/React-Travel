import React from 'react';
import BasicLayout from '../AdminHomePage/adminhomepage';
import { Link } from 'react-router-dom';

var AdminRegistrationPageCss = require('./adminregistration.css');
export default class AdminRegistrationPage extends React.Component{
    render(){
        return(
            <BasicLayout>
                <div className={AdminRegistrationPageCss.page}>
                    <div className={AdminRegistrationPageCss.box}>
                        这是注册情况界面
                    </div>
                </div>
            </BasicLayout>
        
        
        )
    }
}