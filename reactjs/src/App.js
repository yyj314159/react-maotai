import React, {Component} from 'react';
import{Route,Switch,Redirect} from 'react-router-dom'

import './assets/css/bootstrap.css';
import './assets/css/maotai.css';

import HD from './components/header';
import Footer from './components/footer'
import MaoTai from './components/maotai'
import ShopMarket from './components/shopMarket';
import ContactUs from './components/contactUs';
import User from './components/user'
import Error from './components/error';

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
        <HD/>
        <Switch>
          <Route path='/maotai' component={MaoTai}/>
          <Route path='/shopmarket' component={ShopMarket}/>
          <Route path='/contactus' component={ContactUs}/>
          <Route path='/user' component={User}/>
          <Redirect exact from='/' to='/maotai'/>
          <Route component={Error}/>         
        </Switch>
        <Footer/>
      </React.Fragment>
    )
  }
}
