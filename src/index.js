import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import {BrowserRouter,Route,Switch,Redirect,withRouter}from 'react-router-dom';
import LoginPage from './Header/Login/login';
import RegisterPage from './Header/Register/register';
import SharePage from './Footer/Share/share';
import FavoritePage from './Header/Favorite/favorite';
import FootprintPage from './Header/Footprint/footprint';
import AdminHomePage from './AdminHomePage/adminhomepage';
import AdminLoginPage from './AdminLogin/adminlogin';
import AdminRegisterPage from './AdminRegister/adminregister';
import AdminSuccessPage from './Success/adminsuccess';
import AdminForgotPage from './AdminForgot/adminforgot';
import AdminRegistrationPage from './AdminRegistration/adminregistration';
import AdminTrafficPage from './AdminTraffic/admintraffic';
import AdminCollectionPage from './AdminCollection/admincollection';
import AdminShufflingPage from './AdminShuffling/adminshuffling';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <BrowserRouter>
                    <Switch>
                    <Route path="/homepage" exact component={HomePage} history={this.props.history}></Route>
                    <Route path="/homepage/login" exact component={LoginPage} history={this.props.history}></Route>
                    <Route path="/homepage/register" exact component={RegisterPage} history={this.props.history}></Route>
                    <Route path="/homepage/share" exact component={SharePage} history={this.props.history}></Route>
                    <Route path="/homepage/favorite" exact component={FavoritePage} history={this.props.history}></Route>
                    <Route path="/homepage/footprint" exact component={FootprintPage} history={this.props.history}></Route>
                    <Route path="/adminhomepage" exact component={AdminHomePage} history={this.props.history}></Route>
                    <Route path="/adminhomepage/adminlogin" exact component={AdminLoginPage} history={this.props.history}></Route>
                    <Route path="/adminhomepage/adminregister" exact component={AdminRegisterPage} history={this.props.history}></Route>
                    <Route path="/adminhomepage/adminsuccess" exact component={AdminSuccessPage} history={this.props.history}></Route>
                    <Route path="/adminhomepage/adminforgot" exact component={AdminForgotPage} history={this.props.history}></Route>
                    <Route path="/adminhomepage/adminregistration" exact component={AdminRegistrationPage} history={this.props.history}></Route>
                    <Route path="/adminhomepage/admintraffic" exact component={AdminTrafficPage} history={this.props.history}></Route>
                    <Route path="/adminhomepage/admincollection" exact component={AdminCollectionPage} history={this.props.history}></Route>
                    <Route path="/adminhomepage/adminshuffling" exact component={AdminShufflingPage} history={this.props.history}></Route>
                    <Redirect to="/homepage"></Redirect>
                    </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}
export default withRouter(IndexPage);
ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
