import logo from './logo.svg';
import './App.css';
//Cấu hình route
import {Route, Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { Fragment,useEffect } from 'react';
import HeaderHome from './pages/_Components/HeaderHome';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';
import HocDemo from './pages/HocDemo/HocDemo';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { LoginTemplate } from './templates/LoginTemplate/LoginTemplate';
import HomePageMobile from './pages/HomePage/HomePageMobile';
import AntDDemo from './pages/AntDDemo/AntDDemo';
import PhoneIndex from './templates/PhoneIndex/PhoneIndex';
export const history = createBrowserHistory();
function App() {


  return (
    <Router history={history}>
      <Switch>
        <Route path={"/sassdemo"} component={PhoneIndex} />
        <LoginTemplate path="/login" component={Login} />
        <HomeTemplate path="/antd" component={AntDDemo} />
        <HomeTemplate path="/home" component={HomePage} componentMobile={HomePageMobile} />
        <HomeTemplate path="/" component={HomePage} componentMobile={HomePageMobile} />
      </Switch>
    </Router>
  );
}

export default App;
