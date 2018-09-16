import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import Maotai from '../assets/js/maotai'
export default class HD extends Component{

    componentDidMount(){
        Maotai()
    }

    render(){
        return(
        <div className="Header">
            {/* maotai Titel start */}
            <div className="title">
                <ul className="t1">
                    <li>首次茅台商城</li>
                    <li>微商城</li>
                    <li>茅台云商</li>
                </ul>
                <div className="t2">
                    <p>您好，欢迎来到茅台商城！</p>
                </div>
            </div>
            {/* maotai Titel over */}

            {/* maotai Search start	 */}
            <header>
            <div className="header d-flex justify-content-between align-items-center">
                <div id="s1">
                    <input type="text" id="searchText" value="" placeholder="茅台迎宾酒"/>
                    <input type="button" id="search" value="搜索" />
                    <div className="keyWord">
                        关键字:
                        <a href="">飞天茅台</a>
                        <a href="">赖茅酒</a>
                        <a href="">贵州大曲</a>
                        <a href="">茅台酒</a>
                        <a href="">生肖属相</a>
                        <a href="">汉酱</a>
                        <a href="">仁酒</a>
                    </div>
                </div>
            </div>
            </header>
            {/* maotai Search over */}
            {/* maotai Bar start  */}
            <div className="bar">
                <div className="bar_1 d-flex justify-content-between align-items-center">
                    <a href="" className="catalogue">茅台商城商品分类</a>
                    {/* <a href="./maotai.html">首页</a> */}
                    <NavLink to="/maotai" activeClassName='active'>首页</NavLink>	
                    {/* <a href="./contactUs.html">联系我们</a> */}
                    <NavLink to="/contactus" activeClassName='active'>联系我们</NavLink>	
                    <div className="user d-flex justify-content-around align-items-center">
                        {/* <a id="SPC" href="./shopMarket.html">[购物车]</a> */}
                        <NavLink to="shopmarket" activeClassName='active'>[购物车]</NavLink>
                        {/* <div id="enter"><a href="./user.html">[登陆注册]</a></div> */}                      
                        <div id="enter"> <NavLink to="/user" activeClassName='active'>[登陆注册]</NavLink></div>                       
                   </div>
                </div>
                <div className="bar_2">HOT</div>
            </div>
            {/* maotai Bar over */}
        </div>
        )
    }
}

