import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className='panel'>
                    <div className='login_top'>
                        <span className='zi1'>主页</span>
                        <span className='zi2'>/登录</span>
                    </div>
                    <div>
                        <form className='log' action='/login' method='post'>
                            <div className='usandpwd'>
                                用户名<input type='text' name='user'/><br/>
                                密码<input type='password' name='password'/>
                            </div>
                            <div>
                                <Link to="/home/all/1" ><button>登录</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}