import React, { Component } from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Route,Switch,Redirect}from 'react-router-dom'
import Home from "./Container/Home";
import Api from "./Container/Api";
import About from "./Container/About";
import Start from "./Container/Start";
import Content from '../src/Home/Content';
import Login from './Container/Login';

export default class App extends Component {
    render() {
        return (
            <Router basename='React-task2'>
                <div>
                    <Header/>
                </div>
                <div className='main'>
                    <div className='content'>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect from='/' to='/home/all/1'/>}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/about' component={About}/>
                            <Route  path='/content/:id' component={Content}/>
                            <Route path='/login' component={Login}/>
                        </Switch>
                    </div>
                    <div className='sider'>
                        <p style={{margin:'50px'}}>CNode：Node.js专业中文社区您可以 登录 或 注册,也可以 通过 GitHub 登录</p>
                    </div>
                </div>
            </Router>
        )
    }
}